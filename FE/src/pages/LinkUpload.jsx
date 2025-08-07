import { PageHeader } from "../components/PageHeader";
import styled from "styled-components";
import unchecked from "../assets/icons/Unchecked.png";
import checked from "../assets/icons/CheckNick.png";
import "../styles/TextStyle.css";
import { useState } from "react";

export const LinkUpload = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [scrapTitle, setScrapTitle] = useState("");
  const [scrapLink, setScrapLink] = useState("");
  const [scrapMemo, setScrapMemo] = useState("");

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

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
          <CategoryBox />
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
              <button
                onClick={handleClick}
                style={{ borderWidth: 0, backgroundColor: "transparent" }}
              >
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
      <LoginButton className="body2">찝기</LoginButton>
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

const CategoryBox = styled.div`
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
