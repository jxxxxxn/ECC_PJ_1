import styled from "styled-components";
import "../styles/TextStyle.css";

// 버튼 1개 모달입니당
export const ConfirmModal = ({ buttonText = "", content = "", onClick }) => {
  return (
    <ModalOverlay>
      <ModalBox>
        <ModalContent className="body2">{content}</ModalContent>
        <SingleButton onClick={onClick}>
          <ButtonText>{buttonText}</ButtonText>
        </SingleButton>
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

const ModalBox = styled.div`
  width: 350px;
  height: 170px;
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
  padding: 40px;
`;

const SingleButton = styled.div`
  padding: 10px;
  background-color: #ffa07a;
  border-radius: 20px;
  width: 70px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
`;

const ButtonText = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;
