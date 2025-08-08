import styled from "styled-components";
import FriendCard from "./FriendCard"; 

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  max-height: 500px;

  background: #FFE3D7;
  border-radius: 30px;
  padding: 30px;
  gap: 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  justify-items: center;
  align-items: center;

  overflow-y: auto;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  /* 1024px 이하 2개, 600px 이하 1개 */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


export default function FriendListCard() {
  const friends = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 예시 데이터

  return (
    <Container>
      {friends.map((friend, index) => (
        <FriendCard key={index} />
      ))}
    </Container>
  );
}

