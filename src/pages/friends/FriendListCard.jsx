import styled from "styled-components";
import FriendCard from "./FriendCard"; 

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
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
  const friends = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "김철수" },
    { id: 3, name: "이영희" },
    { id: 4, name: "박민수" },
    { id: 5, name: "최수정" },
    { id: 6, name: "홍길동" },
    { id: 7, name: "김철수" },
    { id: 8, name: "이영희" },
    { id: 9, name: "박민수" },
    { id: 10, name: "최수정" },
  ];

  return (
    <Container>
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </Container>
  );
}

