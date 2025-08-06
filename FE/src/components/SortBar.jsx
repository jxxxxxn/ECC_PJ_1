import styled from "styled-components";
import downArrow from "../assets/icons/down-arrow.svg";

// 전체 Wrapper
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px; /* 버튼 사이 간격 */
`;

// 개별 버튼 그룹
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  position: relative; /* 드롭다운 대비해 상대 위치 지정 */
`;

// 텍스트 스타일
const Label = styled.div`
  color: #595959;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 40px;
  word-wrap: break-word;
`;

// 아이콘 Wrapper
const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative; /* ✅ 아이콘 위치 기준 잡기 위해 상대 위치 적용 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 아이콘 구성
const Icon = () => {
  return (
    <img
      src={downArrow}
      alt="아이콘"
      style={{
        width: "24px", // 보통 아이콘은 텍스트보다 작게
        height: "24px",
        objectFit: "contain",
      }}
    />
  );
};

const SortBar = () => {
  return (
    <Container>
      <ButtonGroup>
        <Label>카테고리</Label>
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </ButtonGroup>

      <ButtonGroup>
        <Label>시간순</Label>
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </ButtonGroup>
    </Container>
  );
};

export default SortBar;
