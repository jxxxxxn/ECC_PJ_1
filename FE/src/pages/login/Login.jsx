import logo from "../../assets/logo.png";
import styled from "styled-components";
import "../../styles/TextStyle.css";

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

const LoginBox = styled.div`
  border-radius: 100px;
  width: 765px;
  height: 906px;
  background-color: rgba(255, 160, 122, 0.3);
`;

const TextBox = styled.input`
  width: 515px;
  height: 59px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-width: 0;
`;

export const Login = () => {
  return (
    <>
      <Container>
        <HomeLogo src={logo} alt="linkrap image" />
        <LoginBox>
          <div className="body1" style={{ textAlign: "center" }}>
            집게로 꼭 쥐고 있던 링크,
            <br />
            이제 다시 꺼내볼까요?
          </div>
          아이디
          <br />
          <TextBox />
          <br />
          비밀번호
          <br />
          <TextBox />
        </LoginBox>
      </Container>
    </>
  );
};
