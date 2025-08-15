import logo from "../../assets/logo.png";
import styled from "styled-components";
import "../../styles/TextStyle.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import checkNick from "../../assets/icons/CheckNick.png";

export const SetNickname = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [checkNickname, setCheckNickname] = useState(false);

  const handleCheck = () => {
    setCheckNickname(true);
  };

  // 닉네임 중복 여부 연동 후 로직 변경 필요
  // 중복될 경우 에러메시지 작성 필요 -> 연동 후

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
                paddingBottom: 35,
                lineHeight: "150%",
              }}
            >
              링네임을 정해볼까요?
              <br />곧 링크를 찝을 수 있어요.
            </div>
            <InfoWrapper className="body2">
              <div style={{ paddingLeft: 10 }}>링네임</div>
              <InputWrapper>
                <TextBox
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
                {checkNickname === true ? (
                  <Icon src={checkNick} alt="닉네임 체크" />
                ) : (
                  <CheckButton style={{ fontSize: 13 }} onClick={handleCheck}>
                    중복확인
                  </CheckButton>
                )}
              </InputWrapper>
            </InfoWrapper>

            {checkNickname === false ? (
              <InactiveButton
                className="heading4"
                onClick={() => navigate("/")}
              >
                다음
              </InactiveButton>
            ) : (
              <ActiveButton className="heading4" onClick={() => navigate("/")}>
                다음
              </ActiveButton>
            )}
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

const InactiveButton = styled.button`
  border-radius: 30px;
  background-color: #dedede;
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

const ActiveButton = styled.button`
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

const CheckButton = styled.button`
  border-radius: 30px;
  background-color: rgb(255, 162, 162);
  padding: 8px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 80px;
  border-width: 0;
  cursor: pointer;
  margin-right: 8px;
`;

// 아이디, 비밀번호 받는 텍스트 박스
{
  /* const TextBox = styled.input`
  width: 515px;
  height: 59px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-width: 0;
  font-size: 20px;
  padding-left: 15px;
`; */
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 30px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 515px;
  height: 59px;
  padding: 0 15px;
  gap: 10px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

const TextBox = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 20px;
  margin-left: 10px;
`;

// 텍스트 + 텍스트박스
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 30px;
`;
