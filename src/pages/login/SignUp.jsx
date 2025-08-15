import logo from "../../assets/logo.png";
import styled from "styled-components";
import "../../styles/TextStyle.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignUp = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isMismatch, setIsMismatch] = useState(false);

  const handleSubmit = () => {
    const mismatch = password !== checkPassword;
    setIsMismatch(mismatch);

    if (!mismatch) {
      navigate("/setnickname");
    }
  };
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
              className="heading2"
              style={{
                textAlign: "center",
                letterSpacing: 2,
              }}
            >
              회원가입
            </div>
            <InfoWrapper className="body2">
              <div style={{ paddingLeft: 10 }}>이메일</div>
              <TextBox />
            </InfoWrapper>
            <InfoWrapper className="body2">
              <div style={{ paddingLeft: 10 }}>아이디</div>
              <TextBox />
            </InfoWrapper>
            <InfoWrapper className="body2">
              <div style={{ paddingLeft: 10 }}>비밀번호</div>
              <TextBox
                type="password"
                style={{ fontSize: 30 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InfoWrapper>
            <InfoWrapper className="body2">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div style={{ paddingLeft: 10 }}>비밀번호 확인</div>
                {isMismatch && (
                  <div style={{ color: "red", paddingLeft: 10, fontSize: 15 }}>
                    비밀번호가 일치하지 않습니다.
                  </div>
                )}
              </div>
              <TextBox
                type="password"
                style={{ fontSize: 30 }}
                value={checkPassword}
                onChange={(e) => setCheckPassword(e.target.value)}
              />
            </InfoWrapper>
            <LoginButton className="heading4" onClick={handleSubmit}>
              회원가입
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
  display: flex;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 154px;
  border-width: 0;
  cursor: pointer;
`;

// 텍스트 + 텍스트박스
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

// 아이디, 비밀번호 받는 텍스트 박스
const TextBox = styled.input`
  width: 515px;
  height: 50px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-width: 0;
  font-size: 16px;
  padding-left: 15px;
  outline: none;
`;
