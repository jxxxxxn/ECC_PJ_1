import styled from "styled-components";

const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center; 
  align-items: center;
  border-radius: 10px;
`;

const Box = styled.div`
  width: 129px;
  height: 100%;
  background: white;
  border-radius: 10px;
  border: 1px solid #909090;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BoxDivider = styled.div`
  width: 128px;
  height: 0;
  border-top: 1px solid #909090;
  top: ${(props) => props.top || 0}px;
`;

const BoxItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0px;

  color: black;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 14px;
  gap: 8px;
`;

export const SortBarBox2 = () => {
  return (
    <BoxContainer>
      <Box>
        <BoxItem>최신순</BoxItem>
        <BoxDivider />
        <BoxItem>오래된 순</BoxItem>
        <BoxDivider />
      </Box>
    </BoxContainer>
  );
}
