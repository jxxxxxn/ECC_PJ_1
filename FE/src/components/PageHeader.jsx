// src/components/PageHeader.jsx
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative; 
  margin-bottom: 5px;
`;

const Title = styled.div`
  position: relative; 
  text-align: left;
  color: black;
  font-size: 28px;
  font-family: "Pretendard";
  font-weight: 700;
  word-wrap: break-word;
  padding-bottom: 8px; /* 밑줄과 텍스트 간 간격 */
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 73px;
  height: 1px;
  background-color: black; /* ✅ outline 대신 background 사용 */
`;

export const PageHeader = ({ title = "링크집" }) => {
  return (
    <Wrapper>
      <Title>
        {title}
        <Underline />
      </Title>
    </Wrapper>
  );
};
