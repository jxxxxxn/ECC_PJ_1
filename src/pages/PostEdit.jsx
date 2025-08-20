import styled from "styled-components";
import link from "../assets/icons/link2.png";
import note from "../assets/icons/note.png";
import "../styles/TextStyle.css";
import unchecked from "../assets/icons/Unchecked.png";
import checked from "../assets/icons/CheckNick.png";
import { useState, useEffect, useRef, useMemo } from "react";
import { ConfirmModal, CategoryEdit, CategoryAdd } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../lib/api";

export const PostEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const [scrapTitle, setScrapTitle] = useState("");
  const [scrapLink, setScrapLink] = useState("");
  const [scrapMemo, setScrapMemo] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [categoryName, setCategoryName] = useState(null);

  const originalRef = useRef(null);

  const [catExistsError, setCatExistsError] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get("/categories", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const list = Array.isArray(res.data?.data) ? res.data.data : res.data;
        setCategories(list);
        console.log("조회 성공:", list);
      })
      .catch((err) => {
        console.log("조회 실패: ", err.response?.data || err.message);
      });
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/scraps/${id}`);
        const item = data?.data ?? data;

        setScrapTitle(item.scrapTitle ?? item.title ?? "");
        setScrapLink(item.scrapLink ?? item.url ?? "");
        setScrapMemo(item.scrapMemo ?? item.memo ?? "");
        setCategoryName(item.categoryName ?? item.categoryName ?? "");
        setIsPublic(typeof item.isPublic === "boolean" ? item.isPublic : true);

        originalRef.current = {
          scrapTitle: item.scrapTitle ?? item.title ?? "",
          scrapLink: item.scrapLink ?? item.url ?? "",
          scrapMemo: item.scrapMemo ?? item.memo ?? "",
          isPublic: typeof item.isPublic === "boolean" ? item.isPublic : true,
          categoryName: item.categoryName ?? item.categoryName ?? "",
        };
      } catch (err) {
        setErrMsg(
          err.response?.data?.message ||
            `게시글을 불러오지 못했어요. (${err.response?.status || "net"})`
        );
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [id]);

  const isEdited = useMemo(() => {
    const o = originalRef.current;
    if (!o) return false;
    return (
      o.scrapTitle !== scrapTitle ||
      o.scrapLink !== scrapLink ||
      o.scrapMemo !== scrapMemo ||
      o.isPublic !== isPublic ||
      o.categoryName !== categoryName
    );
  }, [scrapTitle, scrapLink, scrapMemo, isPublic, categoryName]);

  const handleEdit = async () => {
    try {
      const body = {
        scrapTitle,
        scrapLink,
        scrapMemo,
        isPublic,
        categoryName,
      };

      await api.patch(`/scraps/${id}`, body);
      setViewModal(false);
      navigate(`/post/${id}`);
    } catch (err) {
      setViewModal(false);
      alert(
        err.response?.data?.message ||
          `수정에 실패했어요. (${err.response?.status || "net"})`
      );
    }
  };

  if (loading) return <div style={{ padding: 40 }}>불러오는 중…</div>;
  if (errMsg) return <div style={{ padding: 40, color: "red" }}>{errMsg}</div>;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <MainWrapper>
        <div style={{ paddingLeft: 70, paddingTop: 60 }}>
          <div
            style={{
              display: "flex",
              marginBottom: 11,
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: 60,
            }}
          >
            <CategoryEdit
              value={categoryName}
              options={categories.map((c) => c.categoryName)}
              onChange={setCategoryName}
              onAdd={() => {
                setCatExistsError(false);
                setAddCategory(true);
              }}
            />

            <div style={{ display: "flex", alignItems: "center", gap: 50 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div className="body2">Public</div>
                <button
                  onClick={() => setIsPublic(true)}
                  style={{ borderWidth: 0, backgroundColor: "transparent" }}
                >
                  {isPublic ? (
                    <img src={checked} alt="click" />
                  ) : (
                    <img src={unchecked} alt="unclick" />
                  )}
                </button>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div className="body2">Private</div>
                <button
                  onClick={() => setIsPublic(false)}
                  style={{ all: "unset" }}
                >
                  {!isPublic ? (
                    <img src={checked} alt="click" />
                  ) : (
                    <img src={unchecked} alt="unclick" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <TextBox
            value={scrapTitle}
            onChange={(e) => setScrapTitle(e.target.value)}
            placeholder="제목"
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <img src={link} alt="link icon" width="26" height="26" />
            <div className="heading4">Link</div>
          </div>
          <TextBox
            value={scrapLink}
            onChange={(e) => setScrapLink(e.target.value)}
            placeholder="https://example.com"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 17,
            }}
          >
            <img src={note} alt="note icon" width="26" height="26" />
            <div className="heading4">Note</div>
          </div>
          <NoteBox
            value={scrapMemo}
            onChange={(e) => setScrapMemo(e.target.value)}
            placeholder="메모를 입력하세요"
          />
          <div
            style={{ display: "flex", justifyContent: "center", padding: 20 }}
          >
            {!isEdited ? (
              <InactiveButton className="body3">수정하기</InactiveButton>
            ) : (
              <ActiveButton
                className="body3"
                onClick={() => setViewModal(true)}
              >
                수정하기
              </ActiveButton>
            )}
          </div>
        </div>

        {viewModal && (
          <ConfirmModal
            content="수정한 내용을 저장할까요?"
            buttonText="확인"
            onClick={handleEdit}
          />
        )}
        {addCategory && (
          <CategoryAdd
            content="어떤 카테고리를 추가할까요?"
            buttonText1="취소"
            buttonText2="저장"
            onClick1={() => setAddCategory(false)}
            onClick2={async (categoryName) => {
              const name = categoryName?.trim();
              if (!name) return;
              // 중복 검사 (대소문자 무시)
              const exists = categories.some(
                (c) =>
                  c.categoryName.trim().toLowerCase() === name.toLowerCase()
              );
              if (exists) {
                setCatExistsError(true);
                return;
              }

              try {
                const res = await api.post(
                  "/categories",
                  { categoryName: name },
                  { headers: { "Content-Type": "application/json" } }
                );
                const created = res.data?.data ?? res.data;
                setCategories((prev) => [...prev, created]);
                setCategory(created.categoryName);
                setCatExistsError(false);
                setAddCategory(false);
              } catch (err) {
                console.log(
                  "카테고리 추가 실패: ",
                  err.response?.data || err.message
                );
              }
            }}
            exists={catExistsError}
          />
        )}
      </MainWrapper>
    </div>
  );
};

/* --- styles (변경 없음) --- */
const MainWrapper = styled.div`
  border: 1px solid #d7d7d7;
  border-radius: 30px;
  width: 95%;
  height: 80vh;
  margin-top: 30px;
  align-self: center;
`;
const NoteBox = styled.textarea`
  all: unset;
  width: 95%;
  height: 25vh;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #909090;
  font-size: 20px;
  padding-left: 30px;
  padding-top: 30px;
  outline: none;
  ::placeholder {
    color: #909090;
  }
`;
const TextBox = styled.input`
  width: 95%;
  height: 55px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border-width: 1px;
  border-color: #909090;
  font-size: 20px;
  padding-left: 20px;
  outline: none;
  margin-bottom: 20px;
  ::placeholder {
    color: #909090;
  }
`;
const InactiveButton = styled.button`
  border-radius: 30px;
  background-color: #d9d9d9;
  padding: 15px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  width: 100px;
  border-width: 0;
  cursor: not-allowed;
`;
const ActiveButton = styled.button`
  border-radius: 30px;
  background-color: #ffbda2;
  padding: 15px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  width: 100px;
  border-width: 0;
  cursor: pointer;
`;
