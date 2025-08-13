// FriendInfo.jsx
import styled from "styled-components";
import FriendInfoCard from "./FriendInfoCard";
import FriendPostListLayout from "./FriendPostListLayout";
import { useParams } from "react-router-dom";

const FriendContentWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  gap: 50px;

  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export default function FriendInfo() {
  const { id } = useParams();

  const friendData = {
    email: "test@example.com",
    userId: `ID_is_${id}`,
    profileImg: "/assets/profile.jpg",
  };

  const friendPosts = [
    { id: 1, title: "여름 너무 더운데 우짜나~", description: "내 여름 추구미...", isRescrapped: true },
    { id: 2, title: "오늘 점심은 칼국수", description: "냉우동보다 좋음", isRescrapped: false },
    { id: 3, title: "바람이 시원하다", description: "가을 느낌", isRescrapped: true },
  ];

  return (
    <FriendContentWrapper>
      <FriendInfoCard
        email={friendData.email}
        userId={friendData.userId}
        profileImg={friendData.profileImg}
      />
      <FriendPostListLayout posts={friendPosts} />
    </FriendContentWrapper>
  );
}
