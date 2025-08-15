// src/components/PageHeader.jsx
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Title = styled.label`
  width: fit-content;
  position: relative; 
  text-align: left;
  color: black;
  font-size: 28px;
  font-family: "Pretendard";
  font-weight: 700;
  word-wrap: break-word;
  margin-bottom: 10px; 
`;

const Underline = styled.div`
  position: relative; 
  width: 100%;
  height: 1px;
  background-color: black; 
`;

export const PageHeader = ({ title = "링크집" }) => {
  return (
    <TitleWrapper>
      <Title>
        {title}
        <Underline />
      </Title>
    </TitleWrapper>
  );
};
