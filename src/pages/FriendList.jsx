import styled from "styled-components";
import { PageHeader } from "../components/PageHeader";
import FriendListCard from "./friends/FriendListCard";

const ContentWrapper = styled.div`
  width: 100%;

  display: flex; 
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  
  margin: 10px;
  gap: 20px;
`;

// 검색 바
const SearchBar = styled.input`
  width: 100%;
  max-width: 1300px;
  height: 55px;
  margin: 0 auto;

  opacity: 0.5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  border: 1px solid #b4b1b1;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 24px;
  gap: 15px;
`;

export const FriendList = () => {
  return (
    <div
      style={{
        padding: 10,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <PageHeader title="링친" />
      <ContentWrapper>
        <SearchBar placeholder="찾고 싶은 친구가 있으신가요?" />
        <FriendListCard />
      </ContentWrapper>
    </div>
    );
};
