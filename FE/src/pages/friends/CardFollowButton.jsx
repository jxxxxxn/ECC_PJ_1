import styled from "styled-components";
import React, { useState } from "react";

const FollowButton = styled.button`
  width: 80px;
  height: 37px;
  background: ${({ isFollowing }) => (isFollowing ? "rgba(255, 160, 122, 0.7)" : "#F5F5F5")};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  color: black;
`;

const CardFollowButton = () => {
  const [followState, setFollowState] = useState(1); // 1: following, 0: follow

  const toggleFollow = () => {
    setFollowState(prev => (prev === 1 ? 0 : 1));
  };

  return (
    <FollowButton isFollowing={followState === 1} onClick={toggleFollow}>
      {followState === 1 ? "팔로잉" : "팔로우"}
    </FollowButton>
  );
};

export default CardFollowButton;