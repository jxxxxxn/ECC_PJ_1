import styled from "styled-components";

/* ===== 카드 영역 ===== */
const CardWrapper = styled.div`
  width: 100%;
  // height: 544px;
  border: 1px solid #d7d7d7;
  border-radius: 30px;
  padding: 54px 62px; /* 제목과 리스트 여백 확보 */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.div`
  color: black;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 700;
  margin-bottom: 66px; /* 제목과 리스트 사이 간격 */
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const CardItem = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

const CardItemNumber = styled.div`
  color: black;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 700;
  margin-right: 12px;
`;

const CardItemText = styled.div`
  color: black;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 400;
`;

const mostViewedScraps = [
  "첫 번째로 자주 본 스크랩",
  "두 번째로 자주 본 스크랩",
  "세 번째로 자주 본 스크랩",
  "네 번째로 자주 본 스크랩",
  "다섯 번째로 자주 본 스크랩",
];

const cardTitle = "스크랩 최다 카테고리";

export default function MostScarpCard() {
  return (
    <CardWrapper>
      <CardTitle>{cardTitle}</CardTitle>
      <CardList>
        {mostViewedScraps.map((text, idx) => (
          <CardItem key={idx}>
            <CardItemNumber>{idx + 1}.</CardItemNumber>
            <CardItemText>{text}</CardItemText>
          </CardItem>
        ))}
      </CardList>
    </CardWrapper>
  );
}
