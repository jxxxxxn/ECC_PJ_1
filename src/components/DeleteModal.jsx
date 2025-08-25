import styled from "styled-components";
import "../styles/TextStyle.css";
import { useState } from "react";

export const DeleteModal = ({
  buttonText1 = "",
  buttonText2 = "",
  content = "",
  onClick1,
  onClick2,
  exists,
}) => {
  const [password, setPassword] = useState("");

  return (
    <ModalOverlay>
      <ModalBox>
        <ModalContent className="body2">
          <div>{content}</div>
          <div style={{ fontSize: 15, marginTop: -10 }}>
            비밀번호를 정확히 입력하세요
          </div>
          <TextBox
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {exists && (
            <div
              style={{
                fontSize: 12,
                color: "#FE5D18",
                marginBottom: -20,
                marginTop: -5,
              }}
            >
              이미 존재하는 카테고리입니다.
            </div>
          )}
        </ModalContent>
        <ButtonWrapper>
          <GrayButton onClick={onClick1}>
            <ButtonText>{buttonText1}</ButtonText>
          </GrayButton>
          <OrangeButton onClick={onClick2}>
            <ButtonText>{buttonText2}</ButtonText>
          </OrangeButton>
        </ButtonWrapper>
      </ModalBox>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 120px;
  width: 95%;
  height: 80vh;
  align-self: center;
`;

const TextBox = styled.input`
  all: unset;
  display: flex;
  justify-content: center;
  width: 250px;
  height: 40px;
  border-radius: 30px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  background-color: #f0f0f0;
  padding-left: 20px;
  font-size: 15px;
  margin-top: -10px;
`;

const ModalBox = styled.div`
  width: 350px;
  height: 200px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px;
  flex-direction: column;
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: -10px;
`;

const GrayButton = styled.div`
  padding: 8px;
  background-color: #d9d9d9;
  border-radius: 20px;
  width: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const OrangeButton = styled.div`
  padding: 8px;
  background-color: #ffa07a;
  border-radius: 20px;
  width: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const ButtonText = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;
