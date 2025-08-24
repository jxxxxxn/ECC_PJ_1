import styled from "styled-components";
import "../styles/TextStyle.css";
import link from "../assets/icons/link2.png";
import note from "../assets/icons/note.png";
import starFill from "../assets/icons/star_fill.png";
import starEmpty from "../assets/icons/star_line.png";
import commentIcon from "../assets/icons/comment.png";
import copy from "../assets/icons/copy.png";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CommentPagination } from "../components";
import { api } from "../lib/api";
import publicIcon from "../assets/icons/public.png";
import privateIcon from "../assets/icons/private.png";
import { PopupModal } from "../components";

const DEFAULT_PAGE = 1;
const DEFAULT_SIZE = 3;

export const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contentData, setContentData] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const [nickname, setNickname] = useState("");

  // 댓글에 사용 할 닉네임 불러오기
  useEffect(() => {
    const cached =
      window?.user?.nickname ||
      window.sessionStorage.getItem("nickname") ||
      window.localStorage.getItem("nickname");
    if (cached) {
      setNickname(cached);
      return;
    }
  }, [nickname]);

  // 스크랩 열람 여부 기록
  useEffect(() => {
    if (!id) return;
    api
      .patch(`/scraps/${id}/read`)
      .then(() => {
        console.log(`scrap ${id} 열람 기록 완료`);
      })
      .catch((err) => {
        console.error("열람 기록 실패:", err.response?.data || err.message);
      });
  }, [id]);

  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editComment, setEditComment] = useState("");
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [size] = useState(DEFAULT_SIZE);
  const [totalPages, setTotalPages] = useState(0);

  const [viewModal, setViewModal] = useState(false);

  // 댓글 GET
  useEffect(() => {
    if (!id) return;

    api
      .get(`/scraps/${id}/comments`, { params: { page, size } })
      .then(({ data }) => {
        const payload = data?.data ?? data;

        const arr = Array.isArray(payload?.content)
          ? payload.content
          : Array.isArray(payload?.data)
          ? payload.data
          : Array.isArray(payload)
          ? payload
          : [];

        // 전체 개수/전체 페이지 계산 (없으면 현재 페이지의 개수로 추정)
        const totalElements =
          payload?.totalElements ??
          payload?.totalCount ??
          (page - 1) * size + arr.length;

        const pages = Math.ceil(totalElements / size);

        setComments(arr);
        setTotalPages(arr.length > 0 ? Math.max(1, pages) : 0);
      })
      .catch((err) => {
        console.log(
          "댓글 조회 실패",
          err.response?.status,
          err.response?.data || err.message
        );
      });
  }, [id, page, size]); // ← commentTotal 는 의존성에서 제거

  const [favorite, setFavorite] = useState(false);

  const handleFavorite = async (next) => {
    return api.patch(`/scraps/${id}/favorite`, { favorite: next });
  };
  // 게시글 상세 조회 GET
  useEffect(() => {
    if (!id) return;
    api
      .get(`/scraps/${id}`)
      .then(({ data }) => {
        const item = data?.data ?? data;
        console.log("[scrap 조회 성공]", item);
        setContentData(item);
        setFavorite(item.favorite);
      })
      .catch((err) => {
        console.log(
          "[scrap 조회 실패]",
          err.response?.status,
          err.response?.data || err.message
        );
      });
  }, [id]);

  if (!contentData) {
    return <div style={{ padding: 40 }}>불러오는 중…</div>;
  }

  // 클립보드에 복사하기
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contentData.scrapLink);
      console.log("복사 성공!");
    } catch (err) {
      console.error("복사 실패", err);
    }
  };

  // 게시글 삭제
  const handleDelete = async () => {
    if (deleting) return;
    try {
      setDeleting(true);
      await api.delete(`/scraps/${id}`);
      setViewModal(false);
      navigate("/home");
    } catch (err) {
      const status = err.response?.status;
      const msg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "삭제 중 오류가 발생했습니다.";

      if (status === 409) {
        console.warn("삭제 불가: 연결된 데이터 존재");
      } else {
        console.error("삭제 실패:", msg);
      }
    } finally {
      setDeleting(false);
    }
  };

  // 댓글 삭제
  const handleCommentDelete = async (commentId) => {
    try {
      await api.delete(`/comments/${commentId}`);
      setComments((prev) => prev.filter((c) => c.commentId !== commentId));
    } catch (err) {
      console.error("댓글 삭제 실패:", err.response?.data || err.message);
    }
  };

  // 댓글 작성
  const handleCommentSubmit = async () => {
    const text = content.trim();
    if (!text || !id || submitting) return;

    try {
      setSubmitting(true);

      const { data } = await api.post(`/scraps/${id}/comments`, {
        content: text,
      });
      const created = data?.data ?? data;

      const newComment = {
        commentId: created?.commentId ?? crypto.randomUUID(),
        authorNickname: nickname,
        content: created?.content ?? text,
        isMine: true,
      };

      const isLastPage = page === totalPages || totalPages === 0;
      const isPageFull = comments.length >= size;

      if (isLastPage && isPageFull) {
        setTotalPages((t) => (t > 0 ? t + 1 : 2));
        setPage((p) => p + 1);
      } else {
        setComments((prev) => [newComment, ...prev]);
      }

      setContent("");
    } catch (err) {
      console.error("댓글 등록 실패:", err.response?.data || err.message);
      alert(err.response?.data?.message || "댓글 등록에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  // 댓글 수정 제출
  const handleCommentEdit = async (commentId) => {
    const text = editComment.trim();
    if (!commentId || !text) return;

    try {
      const { data } = await api.patch(`/comments/${commentId}`, {
        content: text,
      });
      const updated = data?.data ?? data;

      setComments((prev) =>
        prev.map((c) =>
          c.commentId === commentId
            ? { ...c, content: updated?.content ?? text }
            : c
        )
      );

      setEditingCommentId(null);
      setEditComment("");
    } catch (err) {
      console.error("댓글 수정 실패:", err.response?.data || err.message);
      alert(err.response?.data?.message || "댓글 수정에 실패했습니다.");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MainWrapper>
        <div style={{ paddingLeft: 40, marginRight: 40 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: 20, marginBottom: 11 }}>
              {`<${contentData.categoryName}>`}
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <ActiveButton onClick={() => navigate(`/post/edit/${id}`)}>
                수정
              </ActiveButton>
              <InativeButton onClick={() => setViewModal(true)}>
                삭제
              </InativeButton>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                marginBottom: 15,
              }}
            >
              <div className="heading3">{contentData?.scrapTitle ?? ""}</div>
              <button
                style={{
                  all: "unset",
                  cursor: "pointer",
                  marginBottom: 7,
                }}
                onClick={async () => {
                  const next = !favorite;
                  setFavorite(next); // UI 먼저 바꾸는 낙관적 업데이트
                  try {
                    const res = await handleFavorite(next); // <-- 실제 호출
                    console.log("즐겨찾기 반영 성공:", res.status, res.data);
                  } catch (err) {
                    console.error(
                      "즐겨찾기 반영 실패:",
                      err.response?.data || err.message
                    );
                    setFavorite(!next); // 실패하면 되돌리기
                  }
                }}
              >
                {favorite ? (
                  <img src={starFill} width="40" height="40" />
                ) : (
                  <img src={starEmpty} width="40" height="40" />
                )}
              </button>
              <div style={{ marginBottom: 7 }}>
                {contentData.showPublic === true ? (
                  <img src={publicIcon} width="40" height="40" />
                ) : (
                  <img src={privateIcon} width="40" height="40" />
                )}
              </div>
            </div>
            <button
              style={{
                borderWidth: 0,
                backgroundColor: "transparent",
                marginBottom: 7,
              }}
            ></button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <img src={link} alt="link icon" width="26" height="26" />
            <div className="heading4">Link</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginLeft: 15,
              }}
            >
              <StyledLink
                href={contentData?.scrapLink || ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contentData?.scrapLink
                  ? contentData.scrapLink.length > 30
                    ? contentData.scrapLink.slice(0, 30) + "…"
                    : contentData.scrapLink
                  : ""}
              </StyledLink>
              <button
                style={{ all: "unset", cursor: "pointer" }}
                onClick={handleCopy}
                title="링크 복사하기"
              >
                <img src={copy} alt="복사하기" width="25" height="25" />
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginBottom: 17,
              marginTop: 26,
            }}
          >
            <img src={note} alt="note icon" width="26" height="26" />
            <div className="heading4">Note</div>
          </div>
          <div style={{ marginRight: 30 }}>
            <CategoryBox>{contentData?.scrapMemo ?? ""}</CategoryBox>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginBottom: 17,
              marginTop: 26,
            }}
          >
            <img src={commentIcon} alt="comment icon" width="26" height="26" />
            <div className="heading4" style={{ marginTop: 5 }}>
              Comments
            </div>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderTop: "1px solid #909090",
              borderBottom: "1px solid #909090",
            }}
          >
            {comments.map((item) => (
              <CommentWrapper key={item.commentId}>
                <CommentId>{item.authorNickname}</CommentId>
                {editingCommentId === item.commentId ? (
                  <Grow>
                    <CommentBox
                      value={editComment}
                      onChange={(e) => setEditComment(e.target.value)}
                      style={{ width: "99%", position: "relative" }}
                      placeholder="내용을 수정하세요"
                    />
                  </Grow>
                ) : (
                  <div style={{ fontSize: 18 }}>{item.content}</div>
                )}

                {item.isMine === true && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 8,
                      marginLeft: "auto",
                      paddingRight: 30,
                    }}
                  >
                    {editingCommentId === item.commentId ? (
                      <EditButton
                        onClick={() => handleCommentEdit(item.commentId)}
                        disabled={!editComment.trim()}
                      >
                        저장
                      </EditButton>
                    ) : (
                      <EditButton
                        onClick={() => {
                          setEditingCommentId(item.commentId);
                          setEditComment(item.content);
                        }}
                      >
                        수정
                      </EditButton>
                    )}

                    <DeleteButton
                      onClick={() => handleCommentDelete(item.commentId)}
                    >
                      삭제
                    </DeleteButton>
                  </div>
                )}
              </CommentWrapper>
            ))}
          </div>
          {comments.length > 0 ? (
            <CommentPagination
              currentPage={page}
              totalPages={totalPages}
              onChange={setPage}
            />
          ) : (
            <div
              style={{
                fontSize: 18,
                color: "rgb(120, 120, 120)",
                display: "flex",
                justifyContent: "center",
                padding: 15,
                marginTop: 5,
              }}
            >
              작성된 댓글이 없습니다.
            </div>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              marginTop: 10,
            }}
          >
            <CommentId>작성자 아이디</CommentId>
            <Grow>
              <CommentBox
                placeholder="댓글을 달아보세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ width: "99%" }}
              />
            </Grow>
            <ActiveButton
              onClick={handleCommentSubmit}
              disabled={submitting || !content.trim()}
            >
              저장
            </ActiveButton>
          </div>
          {viewModal && (
            <PopupModal
              buttonText1="취소"
              buttonText2={deleting ? "삭제" : "삭제"}
              content="게시글을 삭제하시겠습니까?"
              onClick1={() => setViewModal(false)}
              onClick2={handleDelete}
            />
          )}
        </div>
      </MainWrapper>
    </div>
  );
};

const MainWrapper = styled.div`
  border: 1px solid #d7d7d7;
  border-radius: 30px;
  width: 95%;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 30px;
  align-self: center;
`;

const CategoryBox = styled.div`
  width: 100%;
  height: 15vh;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #909090;
  position: relative;
  padding-left: 30px;
  padding-top: 30px;
  font-size: 20px;
`;

const StyledLink = styled.a`
  font-size: 20px;
  color: #767676;
  text-decoration: underline;
  &:hover {
    color: #ff6b6b;
    text-decoration: none;
  }
`;

const ActiveButton = styled.button`
  border-radius: 30px;
  background-color: #ffbda2;
  padding: 10px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  width: 50px;
  border-width: 0;
  cursor: pointer;
`;

const InativeButton = styled.button`
  border-radius: 30px;
  background-color: #d9d9d9;
  padding: 10px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  width: 50px;
  border-width: 0;
  cursor: pointer;
`;

const EditButton = styled.button`
  border-radius: 30px;
  background-color: #ffbda2;
  padding: 5px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  width: 50px;
  border-width: 0;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  border-radius: 30px;
  background-color: #d9d9d9;
  padding: 5px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  width: 50px;
  border-width: 0;
  cursor: pointer;
`;

const CommentWrapper = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
  padding-top: 15px;
  align-items: center;
`;

const CommentId = styled.div`
  color: #ff6148;
  font-weight: 600;
  font-size: 18px;
  padding-left: 20px;
  width: 200px;
`;
const CommentBox = styled.input`
  all: unset;
  background-color: #f0f0f0;
  border-radius: 30px;
  height: 40px;
  font-size: 18px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-right: 10px;

  ::placeholder {
    color: #aaa;
  }
`;

const Grow = styled.div`
  flex: 1;
  min-width: 0;
`;
