import styled from "styled-components";
import logo from "../assets/logo.png";
import { IoHome } from "react-icons/io5";

const Wrapper = styled.div`
  border-right: 1px solid #d7d7d7;
  height: 100vh;
`;

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 90px;
  height: 90px;
`;

const HomeIcon = styled(IoHome)`
  font-size: 45px;
`;

export const MenuTap = () => {
  return (
    <Wrapper>
      <Container>
        <IconContainer>
          <Logo src={logo} alt="Linkrap Logo" />
          <HomeIcon />
        </IconContainer>
        <p>메뉴탭입니다</p>
      </Container>
    </Wrapper>
  );
};
