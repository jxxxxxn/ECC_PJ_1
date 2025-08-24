import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { addFriend, removeFriendById, findFriendshipByFriendId } from "../../api/friends";

const FollowButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isFollowing"
})`
  width: 80px;
  height: 37px;
  background: ${({ isFollowing }) => (isFollowing ? "rgba(255, 160, 122, 0.7)" : "#F5F5F5")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  color: black;
`;

const CardFollowButton = ({ friendUserId, initialFriendshipId = null }) => {
  const [isFollowing, setIsFollowing] = useState(!!initialFriendshipId);
  const [friendshipId, setFriendshipId] = useState(initialFriendshipId ?? null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsFollowing(!!initialFriendshipId);
    setFriendshipId(initialFriendshipId ?? null);
  }, [initialFriendshipId]);

  const toggleFollow = async () => {
    if (loading) return;
    setLoading(true);
    try {
      if (isFollowing) {
        let id = friendshipId;

        if (!id) {
          const rel = await findFriendshipByFriendId(friendUserId);
          id = rel?.friendshipId;
        }

        if (!id) throw new Error("친구 관계 ID(friendshipId)를 찾을 수 없습니다.");

        const res = await removeFriendById(id);
        setIsFollowing(false);
        setFriendshipId(null);
      } else {
        let rel = await findFriendshipByFriendId(friendUserId);

        if (rel) {
          setIsFollowing(true);
          setFriendshipId(rel.friendshipId);
        } else {
          const res = await addFriend(friendUserId);
          setIsFollowing(true);
          setFriendshipId(res.friendshipId);
        }
      }
    } catch (e) {
      console.error("팔로우/언팔 오류:", e);
      alert(e?.response?.data?.message || e.message || "처리 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FollowButton isFollowing={isFollowing} onClick={toggleFollow}>
      {isFollowing ? "팔로잉" : "팔로우"}
    </FollowButton>
  );
};

export default CardFollowButton;