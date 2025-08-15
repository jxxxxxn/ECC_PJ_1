import logo from "../../assets/logo.png";
import styled from "styled-components";
import "../../styles/TextStyle.css";
import google from "../../assets/google.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  {
    /*const [username, setUsername] = useState(null);
const [password, setPassword] = useState(null);*/
  }

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
              className="heading3"
              style={{
                textAlign: "center",
                letterSpacing: 2,
                lineHeight: "150%",
              }}
            >
              집게로 꼭 쥐고 있던 링크,
              <br />
              이제 다시 꺼내볼까요?
            </div>
            <InfoWrapper className="body3">
              <div style={{ paddingLeft: 10 }}>아이디</div>
              <TextBox />
            </InfoWrapper>
            <InfoWrapper className="body3">
              <div style={{ paddingLeft: 10 }}>비밀번호</div>
              <TextBox type="password" style={{ fontSize: 30 }} />
            </InfoWrapper>
            <LoginButton
              className="heading5"
              onClick={() => navigate("/loginok")}
            >
              로그인
            </LoginButton>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Line />
              <div>OR</div>
              <Line />
            </div>
            <GoogleButton className="body3">
              <img
                src={google}
                alt="google signin"
                style={{ width: 30, height: 30 }}
              />
              Sign in with Google
            </GoogleButton>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                letterSpacing: 2,
                gap: 10,
                fontSize: 18,
              }}
            >
              Don't have an account?
              <JoinButton onClick={() => navigate("/signup")}>
                Join now
              </JoinButton>
            </div>
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
`;
const HomeLogo = styled.img`
  width: 400px;
  height: 400px;
  margin-bottom: 30px;
`;

// 주황색 박스
const LoginBox = styled.div`
  border-radius: 100px;
  width: 30vw;
  height: 60vh;
  background-color: rgba(255, 160, 122, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;

// 아이디, 비밀번호 받는 텍스트 박스
const TextBox = styled.input`
  width: 20vw;
  height: 40px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-width: 0;
  font-size: 20px;
  padding-left: 15px;
  outline: none;
`;

// 텍스트 + 텍스트박스
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const LoginButton = styled.button`
  border-radius: 30px;
  background-color: #ffbda2;
  padding: 5px;
  width: 5vw;
  display: flex;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-width: 0;
  cursor: pointer;
`;

const Line = styled.div`
  background-color: #000000;
  width: 130px;
  height: 0;
  border-top: 1px solid #000000;
`;

// 구글 로그인 버튼
const GoogleButton = styled.button`
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 250px;
  gap: 23px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-width: 0;
  cursor: pointer;
`;

const JoinButton = styled.button`
  all: unset;
  color: #ff6148;
  cursor: pointer;
  border-bottom: 2px solid #ff6148;
`;
