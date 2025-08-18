import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { CategoryList } from "./CategoryList";

const Box = styled.div`
  width: 129px;
  background: white;
  border-radius: 10px;
  border: 1px solid #909090;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BoxDivider = styled.div`
  width: 128px;
  height: 0;
  border-top: 1px solid #909090;
`;

const BoxItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$center ? "center" : "flex-start")};
  color: black;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: ${(props) => (props.$small ? 13 : 15)}px;
  line-height: 14px;
  padding-left: ${(props) => (props.$center ? 0 : "33px")};
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalWrapper = styled.div`
  z-index: 1000;
`;

export const SortBarBox1 = () => {
  const [openMore, setOpenMore] = useState(false);

  return (
    <div>
      <Box>
        <BoxItem>카테고리 1</BoxItem>
        <BoxDivider />
        <BoxItem>카테고리 2</BoxItem>
        <BoxDivider />
        <BoxItem>카테고리 3</BoxItem>
        <BoxDivider />
        <BoxItem>카테고리 4</BoxItem>
        <BoxDivider />
        <BoxItem 
          $small
          $center
          $clickable
          onClick={() => setOpenMore(true)}
        >
          더보기
        </BoxItem>
      </Box>

      {openMore &&
        createPortal(
          <Overlay onClick={() => setOpenMore(false)}>
            <ModalWrapper onClick={(e) => e.stopPropagation()}>
              <CategoryList
                onClose={() => setOpenMore(false)}
                onSave={(value) => {
                  console.log("새 카테고리 저장:", value);
                  setOpenMore(false);
                }}
              />
            </ModalWrapper>
          </Overlay>,
          document.body // 최상위 body에 붙여 상속 제거
        )
      }
    </div>
  );
};
