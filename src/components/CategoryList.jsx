import styled from "styled-components";
import { useState } from "react";
import { EditCategoryModal } from "./EditCategoryModal";

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

const BackgroundBox = styled.div`
  width: 400px;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: 1px solid #FFF5F2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
`;

const InnerContainer = styled.div`
  width: 315px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  color: black;
  font-size: 30px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 42px;
`;

const CategoryBox = styled.div`
  width: 100%;
  background: white;
  border-radius: 10px;
  border: 1px solid #909090;
  padding: 5px 0px 0px 0px;
`;

const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  margin-bottom: 5px;
`;

const CategoryName = styled.div`
  color: black;
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 400;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const Button = styled.div`
  width: 55.64px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  box-shadow: 2px 4px 4px rgba(0,0,0,0.25);
  background: ${(props) => (props.$variant === "delete" ? "#D9D9D9" : "#FFA07A")};
  color: white;
  font-size: 13px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 18.2px;
  cursor: pointer;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #909090;

`;

export const CategoryList = ({ onClose }) => {
  const categories = ["카테고리 1", "카테고리 2", "카테고리 3", "카테고리 4"];
  const [editCategory, setEditCategory] = useState(null);

  return (
    <div>
        <Overlay onClick={onClose}>
            <BackgroundBox onClick={(e) => e.stopPropagation()}>
                <InnerContainer>
                <Title>카테고리 목록</Title>
                <CategoryBox>
                    <CategoryListWrapper>
                    {categories.map((cat, idx) => (
                        <div key={idx}>
                        <CategoryItem key={idx}>
                            <CategoryName>{cat}</CategoryName>
                            <ButtonGroup>
                                <Button $variant="delete">삭제</Button>
                                <Button $variant="edit" onClick={() => setEditCategory(cat)}>수정</Button>
                            </ButtonGroup>
                        </CategoryItem>
                        {idx < categories.length - 1 && <Divider />}
                        </div>
                    ))}
                    </CategoryListWrapper>
                </CategoryBox>
                </InnerContainer>
            </BackgroundBox>
            </Overlay>

            {editCategory && (
                <EditCategoryModal
                categoryName={editCategory}
                onClose={() => setEditCategory(null)}
                />
            )}
    </div>
    
  );
};
