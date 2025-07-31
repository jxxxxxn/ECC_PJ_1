import styled from "styled-components";
import logo from "../assets/logo.png";
import { IoHome } from "react-icons/io5";
import clip from "../assets/icons/clip.png";
import profile from "../assets/profile.jpg";
import "../styles/TextStyle.css";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

// sidebar 요소
const Sidebar = styled.div`
  width: 100px;
  border-right: 1px solid #d7d7d7;
  padding: 5px 24px 15px 24px;
`;

const Container = styled.div`
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
  cursor: pointer;
`;

const HomeIcon = styled(IoHome)`
  font-size: 40px;
  padding: 30px 0 15px 0;
`;

const ClipIcon = styled.img`
  width: 60px;
  height: 60px;
  padding: 15px 0;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// 헤더 요소 - 검색 & 닉네임 표시
const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 24px 15px 24px;
  justify-content: left;
  align-items: center;
`;
const SearchBar = styled.input`
  flex: 1;
  min-width: 200px; // 이거 얼마나 할건지! 반응형 어떻게??
  height: 40px;
  border-radius: 30px;
  background-color: #f0f0f0;
  border-width: 0;
`;
const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  align-items: center;
  gap: 20px;
`;
const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
`;
const Content = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
`;

export const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Sidebar>
        <Container>
          <IconContainer>
            <Logo
              src={logo}
              alt="Linkrap Logo"
              onClick={() => navigate("/home")}
            />
            <HomeIcon />
            <ClipIcon src={clip} alt="clip icon" />
          </IconContainer>
        </Container>
      </Sidebar>
      <Main>
        <Header>
          <SearchBar />
          <NicknameWrapper>
            <ProfileImage src={profile} alt="basic profile" />
            <div className="body1">Nickname</div>
          </NicknameWrapper>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Main>
    </Layout>
  );
};
