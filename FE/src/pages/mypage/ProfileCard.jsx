import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";


/* ===== 프로필 카드 ===== */
const ProfileWrapper = styled.div`
  width: 1232px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileInfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const ProfileImageBg = styled.div`
  width: 120px;
  height: 120px;
  background: #ffe0d3;
  border-radius: 9999px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 360px;
`;

const ProfileTextGroup = styled.div`
  width: 455px;
  display: inline-flex;
  flex-direction: column;
`;

const EmailText = styled.div`
  height: 32px;
  color: black;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 400;
`;

const IdText = styled.div`
  height: 43px;
  color: black;
  font-size: 40px;
  font-family: Pretendard;
  font-weight: 700;
`;

const ProfileButton = styled.div`
  width: 180px;
  height: 45px;
  padding: 15px 55px;
  background: #ffe3d7;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ff6148;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 500;
`;



/* ===== MyPageCard 컴포넌트 ===== */
export default function ProfileCard() {
  const email = "email: ewha12345678@ewha.ac.kr";
  const userId = "ID_is_ewhawuniv"

  return (
      <ProfileWrapper>
        <ProfileInfoGroup>
          {/* <ProfileImageBg /> */}
          <ProfileImage src={profile} alt="프로필" />
          <ProfileTextGroup>
            <EmailText>{email}</EmailText>
            <IdText>{userId}</IdText>
            <IdText>{userId}</IdText>
          </ProfileTextGroup>
        </ProfileInfoGroup>
        <Link to={`/mypage/edit`} style={{ textDecoration: `none` }}>
          <ProfileButton>
            프로필/회원정보 수정
          </ProfileButton>
        </Link>
      </ProfileWrapper>
  );
}
