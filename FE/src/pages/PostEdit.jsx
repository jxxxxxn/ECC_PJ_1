import styled from "styled-components";
import link from "../assets/icons/link2.png";
import note from "../assets/icons/note.png";
import "../styles/TextStyle.css";
import unchecked from "../assets/icons/Unchecked.png";
import checked from "../assets/icons/CheckNick.png";
import downarrow from "../assets/icons/down-arrow.svg";
import { useState, useEffect } from "react";
import { ConfirmModal } from "../components";
import { useParams, useNavigate } from "react-router-dom";

export const PostEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const contentData = {
    scrapTitle: "여름 넘모 더운데 우짜나~*~*~*~~*~**~*~*~",
    scrapLink: "https://www.instagram.com/",
    scrapMemo: "내 여름 추구미....**",
    category: "여름",
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const [viewModal, setViewModal] = useState(false);
  const handleEdit = () => {
    setViewModal(false);
    navigate(`/post/${id}`);
  };

  const [scrapTitle, setScrapTitle] = useState(contentData.scrapTitle);
  const [scrapLink, setScrapLink] = useState(contentData.scrapLink);
  const [scrapMemo, setScrapMemo] = useState(contentData.scrapMemo);

  // 기존 내용 변경됐을 때...

  const [isEdited, setIsEdited] = useState(false);
  useEffect(() => {
    const isChanged =
      scrapTitle !== contentData.scrapTitle ||
      scrapLink !== contentData.scrapLink ||
      scrapMemo !== contentData.scrapMemo ||
      isChecked === true;

    setIsEdited(isChanged);
  }, [scrapTitle, scrapLink, scrapMemo, isChecked]);

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
            style={{
              display: "flex",
              marginBottom: 11,
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: 60,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 24,
                marginBottom: 11,
                alignItems: "center",
              }}
            >
              카테고리 수정
              <img src={downarrow} style={{ marginBottom: 7 }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 50,
                marginBottom: 11,
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextBox
              value={scrapTitle}
              onChange={(e) => setScrapTitle(e.target.value)}
            />
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
          <TextBox
            value={scrapLink}
            onChange={(e) => setScrapLink(e.target.value)}
          />
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
            <div className="heading4">Note</div>
          </div>
          <NoteBox
            value={scrapMemo}
            onChange={(e) => setScrapMemo(e.target.value)}
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
            content="수정한 내용을 저장했습니다."
            buttonText="확인"
            onClick={handleEdit}
          />
        )}
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
  cursor: pointer;
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
