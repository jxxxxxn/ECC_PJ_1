import { PageHeader } from "../components/PageHeader";
import styled from "styled-components";
import unchecked from "../assets/icons/Unchecked.png";
import checked from "../assets/icons/CheckNick.png";
import "../styles/TextStyle.css";
import { useState } from "react";
import CategoryDropdown from "../components/CategoryBox";
import { CategoryAdd, PopupModal } from "../components";
import { useNavigate } from "react-router-dom";

export const LinkUpload = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [scrapTitle, setScrapTitle] = useState("");
  const [scrapLink, setScrapLink] = useState("");
  const [scrapMemo, setScrapMemo] = useState("");
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState(["운동", "취미", "카페"]);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const [viewModal, setViewModal] = useState(false);
  const [viewSaveModal, setViewSaveModal] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: 10,
      }}
    >
      <PageHeader title="링크 찝기" />
      <ScrapWrapper className="body2">
        <div style={{ paddingLeft: 10 }}>Link</div>
        <TextBox
          placeholder="집게 준비 완료! 링크 하나 집어주세요"
          value={scrapLink}
          onChange={(e) => setScrapLink(e.target.value)}
        />
      </ScrapWrapper>
      <ScrapWrapper className="body2">
        <div style={{ paddingLeft: 10 }}>Title</div>
        <TextBox
          placeholder="링크에 어울리는 제목을 붙여주세요!"
          value={scrapTitle}
          onChange={(e) => setScrapTitle(e.target.value)}
        />
      </ScrapWrapper>
      <ScrapWrapper className="body2">
        <div style={{ paddingLeft: 10 }}>Note</div>
        <NoteBox
          placeholder="이 링크에 대해 짧게 남겨볼까요?"
          value={scrapMemo}
          onChange={(e) => setScrapMemo(e.target.value)}
        />
      </ScrapWrapper>
      <ScrapWrapper className="body2">
        <div style={{ paddingLeft: 10 }}>Category</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 150,
          }}
        >
          <CategoryDropdown
            value={category}
            options={categories}
            onChange={setCategory}
            onAdd={() => {
              console.log("open");
              setViewModal(true);
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 100,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div className="body2">Public</div>

              <button
                onClick={handleClick}
                style={{ borderWidth: 0, backgroundColor: "transparent" }}
              >
                {!isChecked ? (
                  <img src={checked} alt="click" />
                ) : (
                  <img src={unchecked} alt="unclick" />
                )}
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div className="body2">Private</div>
              <button onClick={handleClick} style={{ all: "unset" }}>
                {!isChecked ? (
                  <img src={unchecked} alt="unclick" />
                ) : (
                  <img src={checked} alt="click" />
                )}
              </button>
            </div>
          </div>
        </div>
      </ScrapWrapper>
      <LoginButton className="body2" onClick={() => setViewSaveModal(true)}>
        찝기
      </LoginButton>
      {viewModal && (
        <CategoryAdd
          content="어떤 카테고리를 추가할까요?"
          buttonText1="취소"
          buttonText2="저장"
          onClick1={() => setViewModal(false)}
          onClick2={(categoryName) => {
            if (!categoryName) return;
            const exists = categories.some(
              (c) =>
                c.trim().toLowerCase() === categoryName.trim().toLowerCase()
            );
            if (exists) {
              setViewModal(false);
              return;
            }
            setCategories((prev) => [...prev, categoryName]);
            setCategory(categoryName);
            setViewModal(false);
          }}
        />
      )}
      {viewSaveModal && (
        <PopupModal
          content="게시글을 저장하시겠습니까?"
          buttonText1="취소"
          buttonText2="저장"
          onClick1={() => setViewSaveModal(false)}
          onClick2={() => {
            setViewSaveModal(false);
            navigate("/home");
          }}
        />
      )}
    </div>
  );
};

const TextBox = styled.input`
  width: 100%;
  height: 55px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border-width: 1px;
  border-color: #909090;
  font-size: 20px;
  padding-left: 15px;
  outline: none;
  ::placeholder {
    color: #909090;
  }
`;

const NoteBox = styled.input`
  width: 100%;
  height: 110px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border-width: 1px;
  border-color: #909090;
  font-size: 20px;
  padding-left: 15px;
  outline: none;
  ::placeholder {
    color: #909090;
  }
`;

const CategoryBox = styled.select`
  width: 50%;
  height: 55px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #909090;
  padding-left: 15px;
`;

const LoginButton = styled.button`
  border-radius: 30px;
  background-color: #ffe3d7;
  padding: 10px;
  width: 100px;
  display: flex;
  justify-content: center;
  color: #ff6148;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-width: 0;
  cursor: pointer;
  align-self: center;
  margin-top: 30px;
`;

const ScrapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
