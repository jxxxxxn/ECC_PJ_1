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
import { Pagination } from "../components";
import { api } from "../lib/api";
import publicIcon from "../assets/icons/public.png";
import privateIcon from "../assets/icons/private.png";

const DEFAULT_PAGE = 1;
const DEFAULT_SIZE = 3;

export const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contentData, setContentData] = useState(null);

  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [size] = useState(DEFAULT_SIZE);

  useEffect(() => {
    if (!id) return;
    api
      .get(`/scraps/${id}/comments`, { params: { page, size } })
      .then(({ data }) => {
        const arr = Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data)
          ? data
          : Array.isArray(data?.content)
          ? data.content
          : [];

        setComments(arr);

        console.log("댓글 조회: ", arr);
      })
      .catch((err) => {
        console.log(
          "댓글 조회 실패",
          err.response?.status,
          err.response?.data || err.message
        );
      });
  }, [id, page, size]);

  useEffect(() => {
    if (!id) return;
    api
      .get(`/scraps/${id}`)
      .then(({ data }) => {
        const item = data?.data ?? data;
        console.log("[scrap 조회 성공]", item);
        setContentData(item);
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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contentData.scrapLink);
      console.log("복사 성공!");
    } catch (err) {
      console.error("복사 실패", err);
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
              <InativeButton>삭제</InativeButton>
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
              {/*  onClick={() => setIsFavorite(!isFavorite)} */}
              <div className="heading3">{contentData?.scrapTitle ?? ""}</div>
              <button
                style={{
                  all: "unset",
                  cursor: "pointer",
                  marginBottom: 7,
                }}
              >
                {contentData.favorite === true ? (
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
                {contentData?.scrapLink || ""}
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
                <div style={{ fontSize: 18 }}>{item.content}</div>
              </CommentWrapper>
            ))}
            <CommentWrapper>
              <CommentId>ID_is_myfriend</CommentId>
              <div style={{ fontSize: 18 }}>정말 추천할만 하군~</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 8,
                  marginLeft: "auto",
                  paddingRight: 30,
                }}
              >
                <EditButton>수정</EditButton>
                <DeleteButton>삭제</DeleteButton>
              </div>
            </CommentWrapper>
          </div>
          <Pagination />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              marginTop: 10,
            }}
          >
            <CommentId>작성자 아이디</CommentId>
            <CommentBox placeholder="댓글을 달아보세요"></CommentBox>
            <ActiveButton>저장</ActiveButton>
          </div>
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
  width: 95%;
  height: 40px;
  font-size: 18px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-right: 10px;

  ::placeholder {
    color: #aaa;
  }
`;
