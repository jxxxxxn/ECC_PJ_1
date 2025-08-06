import { useState } from "react";
import styled from "styled-components";

const PagenationWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const PageList = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PageButton = styled.div`
  width: 15px;
  height: 40px;
  position: relative; /* 자식 Underline의 기준 */
  cursor: pointer;
`;

const PageNumber = styled.div`
  color: black;
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: 400;
  text-align: center;
  line-height: 40px;
  user-select: none;
  padding-left: ${({ page }) =>
    page === 1 ? "3px" : page === 2 ? "2px" : "1px"};
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: black;
`;

const NextButton = styled.div`
  width: 57px;
  height: 40px;
  color: black;
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: 400;
  cursor: pointer;
  line-height: 40px;
  margin-left: 10px;
  user-select: none;
`;

const Pagenation = ({ totalPages = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PagenationWrapper>
      <PageList>
        {pages.map((page) => (
          <PageButton key={page} onClick={() => setCurrentPage(page)}>
            <PageNumber page={page}>{page}</PageNumber>
            {page === currentPage && <Underline />}
          </PageButton>
        ))}
      </PageList>
      <NextButton
        onClick={() =>
          setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
        }
      >
        next &gt;
      </NextButton>
    </PagenationWrapper>
  );
};

export default Pagenation;
