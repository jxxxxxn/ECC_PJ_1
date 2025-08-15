import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import MostScrapCard from "./MostScrapCard";
import MostViewedCard from "./MostViewedCard";

/* ===== 전체 래퍼 ===== */
const PageWrapper = styled.div`
  width: 100%;
  // height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 75px;
`;

const CardSection = styled.div`
  width: 1232px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export function MyPage() {
  return (
    <PageWrapper>
      <ProfileCard />
      <CardSection>
        <MostViewedCard />
        <MostScrapCard />
      </CardSection>
    </PageWrapper>
    
  );
}
