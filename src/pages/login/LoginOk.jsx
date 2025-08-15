import logo from "../../assets/logo.png";
import styled from "styled-components";
import "../../styles/TextStyle.css";
import { useNavigate } from "react-router-dom";

export const LoginOk = () => {
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
            <div
              style={{
                textAlign: "center",
                letterSpacing: 2,
                lineHeight: "150%",
                fontSize: 30,
              }}
            >
              집게 장전 완료!
              <br />
              이제 링크를 하나씩 담아보세요.
            </div>
            <LoginButton className="heading4" onClick={() => navigate("/home")}>
              시작하기
            </LoginButton>
          </LoginBox>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding-top: 50px;
`;
const HomeLogo = styled.img`
  width: 500px;
  height: 500px;
`;

// 주황색 박스
const LoginBox = styled.div`
  border-radius: 100px;
  width: 700px;
  height: 800px;
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
  color: #ffffff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 154px;
  border-width: 0;
  cursor: pointer;
`;
