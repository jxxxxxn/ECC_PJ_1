import styled from "styled-components";
import "../styles/TextStyle.css";
import link from "../assets/icons/link2.png";
import note from "../assets/icons/note.png";
import starFill from "../assets/icons/star_fill.png";
import starEmpty from "../assets/icons/star_line.png";
import edit from "../assets/icons/Edit.png";
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
        <div style={{ paddingLeft: 70, paddingTop: 60 }}>
          <div
            style={{ fontSize: 24, marginBottom: 11 }}
          >{`<${contentData.category}>`}</div>
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
              <div className="heading1">{contentData.scrapTitle}</div>
              <button
                style={{
                  all: "unset",
                  cursor: "pointer",
                  marginBottom: 7,
                }}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? (
                  <img src={starFill} width="55" height="55" />
                ) : (
                  <img src={starEmpty} width="55" height="55" />
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
            >
              <img
                src={edit}
                width="55"
                height="55"
                onClick={() => navigate(`/post/edit/${id}`)}
              />
            </button>
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
            <div className="heading3">Link</div>
          </div>
          <StyledLink
            href={contentData.scrapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contentData.scrapLink}
          </StyledLink>
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
            <div className="heading3">Note</div>
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
  font-size: 24px;
  color: #767676;
  text-decoration: underline;
  &:hover {
    color: #ff6b6b;
    text-decoration: none;
  }
`;
