import logo from "../../assets/logo.png";
import styled from "styled-components";
import "../../styles/TextStyle.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import checkNick from "../../assets/icons/CheckNick.png";
import axios from "axios";

export const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [checkingEmail, setCheckingEmail] = useState(false);
  const [emailOk, setEmailOk] = useState(false);

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const [isMismatch, setIsMismatch] = useState(false);
  const [checkingNick, setCheckingNick] = useState(false);
  const [nickOk, setNickOk] = useState(false);

  const onChangeCheckPassword = (e) => {
    const v = e.target.value;
    setCheckPassword(v);
    setIsMismatch(password !== v);
  };

  const handleCheckNickname = () => {
    if (!nickname.trim()) return;
    setCheckingNick(true);
    setNickOk(false);
    setTimeout(() => {
      const available = nickname.trim().toLowerCase() !== "taken";
      setNickOk(available);
      setCheckingNick(false);
    }, 700);
  };

  const handleCheckEmail = () => {
    if (!email.trim()) return;
    setCheckingEmail(true);
    setEmailOk(false);
    setTimeout(() => {
      const available = email.trim().toLowerCase() !== "test@test.com";
      setEmailOk(available);
      if (!available) setCheckingEmail(false);
    }, 700);
  };

  const canSubmit =
    email.trim() &&
    loginId.trim() &&
    password.trim() &&
    checkPassword.trim() &&
    nickname.trim() &&
    !isMismatch &&
    emailOk &&
    nickOk;

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!canSubmit) {
      alert("입력값을 확인해 주세요. (이메일/닉네임 중복확인 포함)");
      return;
    }
    if (submitting) return;

    try {
      setSubmitting(true);
      const res = await axios.post(
        "http://eccteam1-env.eba-fpmvb3id.us-east-1.elasticbeanstalk.com/auth/join",
        { loginId, email, password, nickname },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("[회원가입 성공]", res.data);
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    } catch (err) {
      console.log("[회원가입 실패]:", err.response?.data || err.message);
      alert("회원가입 중 오류가 발생했어요.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Container>
      <HomeLogo src={logo} alt="linkrap image" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginBox>
          <div
            className="heading2"
            style={{ textAlign: "center", letterSpacing: 2 }}
          >
            회원가입
          </div>

          <InfoWrapper className="body2">
            <div style={{ paddingLeft: 10 }}>이메일</div>
            <InputWrapper>
              <NicknameBox
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailOk(false);
                }}
              />
              {emailOk ? (
                <Icon src={checkNick} alt="이메일 체크" />
              ) : (
                <CheckButton
                  onClick={handleCheckEmail}
                  disabled={checkingEmail}
                >
                  {checkingEmail ? "확인중..." : "중복확인"}
                </CheckButton>
              )}
            </InputWrapper>
          </InfoWrapper>
          <InfoWrapper className="body2">
            <div style={{ paddingLeft: 10 }}>아이디</div>
            <TextBox
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
          </InfoWrapper>

          <InfoWrapper className="body2">
            <div style={{ paddingLeft: 10 }}>비밀번호</div>
            <TextBox
              type="password"
              style={{ fontSize: 16 }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setIsMismatch(e.target.value !== checkPassword);
              }}
            />
          </InfoWrapper>

          <InfoWrapper className="body2">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ paddingLeft: 10 }}>비밀번호 확인</div>
              {isMismatch && (
                <div style={{ color: "red", paddingLeft: 10, fontSize: 15 }}>
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
            </div>
            <TextBox
              type="password"
              style={{ fontSize: 16 }}
              value={checkPassword}
              onChange={onChangeCheckPassword}
            />
          </InfoWrapper>

          <InfoWrapper className="body2">
            <div style={{ paddingLeft: 10 }}>링네임</div>
            <InputWrapper>
              <NicknameBox
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                  setNickOk(false); // 바뀌면 다시 확인 필요
                }}
                placeholder="원하는 링네임"
              />
              {nickOk ? (
                <Icon src={checkNick} alt="닉네임 체크" />
              ) : (
                <CheckButton
                  onClick={handleCheckNickname}
                  disabled={checkingNick}
                >
                  {checkingNick ? "확인중..." : "중복확인"}
                </CheckButton>
              )}
            </InputWrapper>
          </InfoWrapper>

          {canSubmit ? (
            <ActiveButton
              className="heading4"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? "처리중..." : "회원가입"}
            </ActiveButton>
          ) : (
            <InactiveButton className="heading4" disabled>
              회원가입
            </InactiveButton>
          )}
        </LoginBox>
      </div>
    </Container>
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
const LoginBox = styled.div`
  border-radius: 100px;
  width: 700px;
  height: 800px;
  background: rgba(255, 160, 122, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const TextBox = styled.input`
  width: 515px;
  height: 50px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: 0;
  font-size: 16px;
  padding-left: 15px;
  outline: none;
`;
const InactiveButton = styled.button`
  border-radius: 30px;
  background: #dedede;
  padding: 10px;
  width: 154px;
  display: flex;
  justify-content: center;
  color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: 0;
  cursor: not-allowed;
`;
const ActiveButton = styled.button`
  border-radius: 30px;
  background: #ffbda2;
  padding: 10px;
  width: 154px;
  display: flex;
  justify-content: center;
  color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: 0;
  cursor: pointer;
`;
const CheckButton = styled.button`
  border-radius: 30px;
  background: rgb(255, 162, 162);
  padding: 8px;
  width: 80px;
  display: flex;
  justify-content: center;
  color: #fff;
  border: 0;
  cursor: pointer;
  margin-right: 8px;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 30px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 500px;
  height: 50px;
  padding: 0 15px;
  gap: 10px;
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;
const NicknameBox = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  padding-left: 5px;
`;
