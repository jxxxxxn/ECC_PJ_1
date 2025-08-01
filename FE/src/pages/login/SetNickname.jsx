import logo from "../../assets/logo.png";
import styled from "styled-components";
import "../../styles/TextStyle.css";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 167px;
  padding-top: 87px;
`;
const HomeLogo = styled.img`
  width: 650px;
  height: 650px;
`;

// 주황색 박스
const LoginBox = styled.div`
  border-radius: 100px;
  width: 765px;
  height: 906px;
  background-color: rgba(255, 160, 122, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;

const LoginButton = styled.button`
  border-radius: 30px;
  background-color: #ffbda2;
  padding: 10px;
  width: 150;
  display: flex;
  justify-content: center;
  color: #2f2f2f;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 154px;
  border-width: 0;
  cursor: pointer;
`;

export const SetNickname = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <HomeLogo src={logo} alt="linkrap image" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <LoginBox>
            닉네임 설정 페이지
            <LoginButton className="heading3" onClick={() => navigate("/")}>
              Next
            </LoginButton>
          </LoginBox>
        </div>
      </Container>
    </>
  );
};
