import styled from "styled-components";
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import "../styles/TextStyle.css";
import homeClick from "../assets/icons/home-click.png";
import homeUnclick from "../assets/icons/home-unclick.png";
import peopleClick from "../assets/icons/people-click.png";
import peopleUnclick from "../assets/icons/people-unclick.png";
import clipClick from "../assets/icons/clip-click.png";
import clipUnclick from "../assets/icons/clip-unclick.png";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import search from "../assets/icons/search.png";

export const MainLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Layout>
      <Sidebar>
        <Container>
          <Logo src={logo} alt="Linkrap Logo" />
          <IconContainer>
            <Link to="/home">
              <Icon
                src={pathname === "/home" ? homeClick : homeUnclick}
                alt="home"
              />
            </Link>
            <Link to="/linkupload">
              <Icon
                src={pathname === "/linkupload" ? clipClick : clipUnclick}
                alt="clip"
                style={{ width: 55, height: 55 }}
              />
            </Link>
            <Link to="/friendlist">
              <Icon
                src={pathname === "/friendlist" ? peopleClick : peopleUnclick}
                alt="people"
              />
            </Link>
          </IconContainer>
        </Container>
      </Sidebar>
      <Main>
        <Header>
          <SearchWrapper>
            <img src={search} alt="검색" width="24" height="24" />
            <SearchBar />
          </SearchWrapper>
          <NicknameWrapper onClick={() => navigate("/mypage")}>
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
  gap: 35px;
  justify-content: center;
  margin-top: 30px;
  padding: 0 22px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 105px;
  height: 105px;
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
  border: none;
  outline: none;
  background: transparent;
  font-size: 18px;
  margin-left: 10px;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 30px;
  min-width: 200px;
  height: 40px;
  padding: 0 15px;
  gap: 5px;
`;

const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  align-items: center;
  gap: 15px;
  cursor: pointer;
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
