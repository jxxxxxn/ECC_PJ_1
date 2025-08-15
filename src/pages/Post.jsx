import styled from "styled-components";
import "../styles/TextStyle.css";
import link from "../assets/icons/link2.png";
import note from "../assets/icons/note.png";
import starFill from "../assets/icons/star_fill.png";
import starEmpty from "../assets/icons/star_line.png";
import copy from "../assets/icons/copy.png";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Post = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const contentData = {
    scrapTitle: "여름 넘모 더운데 우짜나~*~*~*~~*~**~*~*~",
    scrapLink: "https://www.instagram.com/",
    scrapMemo: "내 여름 추구미....**",
    category: "여름",
  };

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
        gap: "15px",
      }}
    >
      <MainWrapper>
        <div style={{ paddingLeft: 40, paddingTop: 60 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 70,
            }}
          >
            <div
              style={{ fontSize: 22, marginBottom: 11 }}
            >{`<${contentData.category}>`}</div>
            <ActiveButton onClick={() => navigate(`/post/edit/${id}`)}>
              수정하기
            </ActiveButton>
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
                marginBottom: 26,
              }}
            >
              <div className="heading2">{contentData.scrapTitle}</div>
              <button
                style={{
                  all: "unset",
                  cursor: "pointer",
                  marginBottom: 7,
                }}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? (
                  <img src={starFill} width="40" height="40" />
                ) : (
                  <img src={starEmpty} width="40" height="40" />
                )}
              </button>
            </div>
            <button
              style={{
                borderWidth: 0,
                backgroundColor: "transparent",
                marginBottom: 7,
                paddingRight: 70,
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
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <StyledLink
              href={contentData.scrapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contentData.scrapLink}
            </StyledLink>
            <button
              style={{ all: "unset", cursor: "pointer" }}
              onClick={handleCopy}
              title="링크 복사하기"
            >
              <img src={copy} alt="복사하기" width="25" height="25" />
            </button>
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
          <CategoryBox>{contentData.scrapMemo}</CategoryBox>
        </div>
      </MainWrapper>
    </div>
  );
};

const MainWrapper = styled.div`
  border: 1px solid #d7d7d7;
  border-radius: 30px;
  width: 95%;
  height: 80vh;
  margin-top: 30px;
  align-self: center;
`;

const CategoryBox = styled.div`
  width: 95%;
  height: 30vh;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #909090;
  padding-left: 15px;
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
  padding: 15px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  width: 100px;
  border-width: 0;
  cursor: pointer;
`;
