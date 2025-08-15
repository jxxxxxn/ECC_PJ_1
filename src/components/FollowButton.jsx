import styled from "styled-components";
import React, { useState } from "react";

const FollowButtonStyle = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isFollowing"
})`
  width: 120px;
  height: 50px;
  background: ${({ isFollowing }) =>
    isFollowing ? "rgba(255, 160, 122, 0.7)" : "#F5F5F5"};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  color: black;
`;

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(true); // true면 팔로잉, false면 팔로우

  const toggleFollow = () => {
    setIsFollowing(prev => !prev);
  };

  return (
    <FollowButtonStyle isFollowing={isFollowing} onClick={toggleFollow}>
      {isFollowing ? "팔로잉" : "팔로우"}
    </FollowButtonStyle>
  );
};

export default FollowButton;