import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 20px;
  background: rgba(255, 160, 122, 0.6);
  border-radius: 30px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  width: fit-content;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  gap: 15px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  font-family: Pretendard, sans-serif;
  color: black;
`;

const Subtitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  font-family: Pretendard, sans-serif;
  color: black;
  line-height: 1.2;
`;

const ListWrapper = styled.div`
  background: rgba(255, 245, 242, 0.7);
  border-radius: 30px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  font-family: Pretendard, sans-serif;
  color: black;
  line-height: 40px;
`;

const ItemSubtitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-family: Pretendard, sans-serif;
  color: #767676;
  line-height: 40px;
`;

export default function LinkMind() {
  return (
    <Container>
      <TitleGroup>
        <Title>링마인드</Title>
        <Subtitle>
          놓친 링크,<br />다시 찝어드려요!
        </Subtitle>
      </TitleGroup>

      <ListWrapper>
        {[...Array(5)].map((_, i) => (
          <ListItem key={i}>
            <ItemTitle>여름 넘모 더운데 ... (더보기)</ItemTitle>
            <ItemSubtitle>내 여름 추구미....**</ItemSubtitle>
          </ListItem>
        ))}
      </ListWrapper>
    </Container>
  );
}