import styled from "styled-components";
import profile from "../../assets/profile.jpg";

/* ===== 전체 래퍼 ===== */
const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 75px;
`;

/* ===== 프로필 카드 ===== */
const ProfileWrapper = styled.div`
  width: 1232px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileInfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const ProfileImageBg = styled.div`
  width: 120px;
  height: 120px;
  background: #ffe0d3;
  border-radius: 9999px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 360px;
`;

const ProfileTextGroup = styled.div`
  width: 455px;
  display: inline-flex;
  flex-direction: column;
`;

const EmailText = styled.div`
  height: 32px;
  color: black;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 400;
`;

const IdText = styled.div`
  height: 43px;
  color: black;
  font-size: 40px;
  font-family: Pretendard;
  font-weight: 700;
`;

const ProfileButton = styled.div`
  width: 210px;
  height: 60px;
  padding: 18px 74px;
  background: #ffe3d7;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ff6148;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 500;
`;

/* ===== 카드 영역 ===== */
const CardSection = styled.div`
  align-self: stretch;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
`;

const CardWrapper = styled.div`
  width: 594px;
  height: 544px;
  position: relative;
  border: 1px solid #d7d7d7;
  border-radius: 30px;
`;

const CardTitle = styled.div`
  position: absolute;
  top: 54px;
  left: 62px;
  color: black;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 700;
`;

const CardList = styled.div`
  position: absolute;
  top: 152px;
  left: 62px;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const CardItem = styled.div`
  position: relative;
  height: 32px;
`;

const CardItemNumber = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: black;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 700;
`;

const CardItemText = styled.div`
  position: absolute;
  top: 8px;
  left: 44px;
  color: black;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 400;
`;

/* ===== MyPageCard 컴포넌트 ===== */
export default function MyPageCard() {
  const mostViewedScraps = [
    "첫 번째로 자주 본 스크랩",
    "두 번째로 자주 본 스크랩",
    "세 번째로 자주 본 스크랩",
    "네 번째로 자주 본 스크랩",
    "다섯 번째로 자주 본 스크랩",
  ];

  const mostCategoryScraps = [
    "첫 번째로 자주 본 스크랩",
    "두 번째로 자주 본 스크랩",
    "세 번째로 자주 본 스크랩",
    "네 번째로 자주 본 스크랩",
    "다섯 번째로 자주 본 스크랩",
  ];

  return (
    <PageWrapper>
      {/* (1) 프로필 카드 -> 이거 컴포넌트 빼서 적용 + 친구 프로필도 적용해야함 */}
      <ProfileWrapper>
        <ProfileInfoGroup>
          <ProfileImageBg />
          <ProfileImage src={{profile}} alt="프로필" />
          <ProfileTextGroup>
            <EmailText>email: ewha12345678@ewha.ac.kr</EmailText>
            <IdText>ID_is_ewhawuniv</IdText>
          </ProfileTextGroup>
        </ProfileInfoGroup>
        <ProfileButton>프로필/회원정보 수정</ProfileButton>
      </ProfileWrapper>

      {/* (2) 가장 많이 본 스크랩 + (3) 스크랩 최다 카테고리 -> 친구랑 비교해서 빼서 적용하기 */}
      <CardSection>
        {/* 가장 많이 본 스크랩 */}
        <CardWrapper>
          <CardTitle>가장 자주 본 스크랩</CardTitle>
          <CardList>
            {mostViewedScraps.map((text, idx) => (
              <CardItem key={idx}>
                <CardItemNumber>{idx + 1}.</CardItemNumber>
                <CardItemText>{text}</CardItemText>
              </CardItem>
            ))}
          </CardList>
        </CardWrapper>

        {/* 스크랩 최다 카테고리 */}
        <CardWrapper>
          <CardTitle>스크랩 최다 카테고리</CardTitle>
          <CardList>
            {mostCategoryScraps.map((text, idx) => (
              <CardItem key={idx}>
                <CardItemNumber>{idx + 1}.</CardItemNumber>
                <CardItemText>{text}</CardItemText>
              </CardItem>
            ))}
          </CardList>
        </CardWrapper>
      </CardSection>
    </PageWrapper>
  );
}
