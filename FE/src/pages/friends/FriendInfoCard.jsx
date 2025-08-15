// FriendInfoCard.jsx
import styled from "styled-components";
import profileImage from "../../assets/profile.jpg";
import FollowButton from "../../components/FollowButton";

/* ===== 프로필 카드 ===== */
const ProfileWrapper = styled.div`
  width: 1232px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const ProfileInfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
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

// 추후에 src 속성 안 profileImage -> profileImg 변경 후 import 삭제
export default function FriendInfoCard({ email, userId, profileImg }) {
  return (
    <ProfileWrapper>
      <ProfileInfoGroup>
        <ProfileImage src={profileImage} alt="프로필" />
        <ProfileTextGroup>
          <EmailText>{email}</EmailText>
          <IdText>{userId}</IdText>
        </ProfileTextGroup>
      </ProfileInfoGroup>
      <FollowButton />
    </ProfileWrapper>
  );
}

