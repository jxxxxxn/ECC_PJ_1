import styled from 'styled-components';
import profile from "../../assets/profile.jpg";
import CardFollowButton from "./CardFollowButton"; 

const CardWrapper = styled.div`
  width: 320px;
  height: 120px;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
`;

const ProfileImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

const Username = styled.div`
  width: 139px;
  text-align: center;
  color: black;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
`;

const FollowButton = styled.button`
  width: 80px;
  height: 37px;
  background: rgba(255, 160, 122, 0.7);
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  color: black;
`;

export default function FriendCard() {
  return (
    <CardWrapper>
      <ProfileContainer>
        <ProfileImage src={profile} alt="친구 프로필" />
        <Username>ID_is_myfriend</Username>
      </ProfileContainer>
      <CardFollowButton/>
    </CardWrapper>
  );
}