import styled from "styled-components";
import "../styles/TextStyle.css";

// 버튼 두개 모달입니당
export const PopupModal = ({
  buttonText1 = "",
  buttonText2 = "",
  content = "",
  onClick1,
  onClick2,
}) => {
  return (
    <ModalOverlay>
      <ModalBox>
        <ModalContent className="body2">{content}</ModalContent>
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
  padding: 35px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const GrayButton = styled.div`
  padding: 8px;
  background-color: #d9d9d9;
  border-radius: 20px;
  width: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
`;

const OrangeButton = styled.div`
  padding: 8px;
  background-color: #ffa07a;
  border-radius: 20px;
  width: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
`;

const ButtonText = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;
