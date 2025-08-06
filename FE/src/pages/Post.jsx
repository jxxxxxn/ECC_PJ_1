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
          <div style={{ fontSize: 24, marginBottom: 11 }}>{`<카테고리>`}</div>
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
              <div className="heading1">제목은 다음과 같습니다.</div>
              <button
                style={{
                  borderWidth: 0,
                  backgroundColor: "transparent",
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
          <div style={{ fontSize: 24, color: "#767676", marginBottom: 26 }}>
            https://www.instagram.com/
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginBottom: 17,
            }}
          >
            <img src={note} alt="note icon" width="26" height="26" />
            <div className="heading3">Note</div>
          </div>
          <CategoryBox />
        </div>
      </MainWrapper>
    </div>
  );
};

const MainWrapper = styled.div`
  border: 1px solid #d7d7d7;
  border-radius: 30px;
  width: 95%;
  height: 85%;
  margin-top: 30px;
  align-self: center;
`;

const CategoryBox = styled.div`
  width: 95%;
  height: 350px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #909090;
  padding-left: 15px;
`;
