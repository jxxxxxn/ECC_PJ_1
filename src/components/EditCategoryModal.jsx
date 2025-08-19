import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

// Overlay
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

// Modal Box
const ModalBox = styled.div`
  width: 320px;
  padding: 34px 50px;
  background: white;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.25);
  border-radius: 15px;
  outline: 1px solid #FFF5F2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Inner Container
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 19px;
  align-items: center;
`;

// Title / Subtitle
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 30px;
  line-height: 42px;
  color: black;
  word-wrap: break-word;
`;

const SubTitle = styled.div`
  width: 100%;
  text-align: center;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 22px;
  line-height: 30.8px;
  color: black;
  word-wrap: break-word;
`;

// Input placeholder
const InputBox = styled.input`
  width: 275px;
  height: 40px;
  background: #F0F0F0;
  border-radius: 30px;
  padding: 0px 15px;
`;

// Button Group
const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Button = styled.div`
  width: 76px;
  height: 38px;
  padding: 0 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  box-shadow: 2px 4px 4px rgba(0,0,0,0.25);
  background: ${(props) => (props.variant === "cancel" ? "#D9D9D9" : "#FFA07A")};
  cursor: pointer;
  color: white;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 21px;
  line-height: 29.4px;
`;

export const EditCategoryModal = ({ onClose, categoryName }) => {
  return createPortal(
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <InnerContainer>
          <Title>{categoryName}</Title>
          <SubTitle>카테고리명을 수정할까요?</SubTitle>
          <InputBox />
          <ButtonGroup>
            <Button variant="cancel" onClick={onClose}>취소</Button>
            <Button>수정</Button>
          </ButtonGroup>
        </InnerContainer>
      </ModalBox>
    </Overlay>,
    document.body
  );
};
