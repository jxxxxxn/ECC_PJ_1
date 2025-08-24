import styled from "styled-components";

const CommentPagination = ({ currentPage, totalPages, onChange }) => {
  if (!totalPages || totalPages < 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationWrapper>
      <PageList>
        {pages.map((page) => (
          <PageButton key={page} onClick={() => onChange(page)}>
            <PageNumber $active={page === currentPage}>{page}</PageNumber>
          </PageButton>
        ))}
      </PageList>
      <NextButton
        onClick={() => onChange(Math.min(currentPage + 1, totalPages))}
      >
        next &gt;
      </NextButton>
    </PaginationWrapper>
  );
};

export default CommentPagination;

const PaginationWrapper = styled.div`
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
  cursor: pointer;
`;
const PageNumber = styled.div`
  color: black;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  text-align: center;
  line-height: 40px;
  user-select: none;
  text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
  text-underline-offset: 8px;
  text-decoration-thickness: 1.5px;
`;
const NextButton = styled.div`
  width: 57px;
  height: 40px;
  color: black;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 400;
  cursor: pointer;
  line-height: 40px;
  margin-left: 10px;
  user-select: none;
`;
