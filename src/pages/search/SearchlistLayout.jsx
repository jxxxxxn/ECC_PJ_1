import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ContentItem = ({ title, description, onClick }) => (
  <Item onClick={onClick} style={{ cursor: "pointer" }}>
    <TextWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </TextWrapper>
  </Item>
);

export default function SearchlistLayout({ items = [] }) {
  const navigate = useNavigate();

  if (items.length === 0) {
    return <Empty>검색 결과가 없어요.</Empty>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <FrameWrapper>
        <InnerWrapper>
          {items.map((item, idx) => {
            const id = item.scrapId ?? item.id;
            return (
              <div key={id ?? idx} style={{ width: "100%" }}>
                <ContentItem
                  title={item.scrapTitle ?? item.title}
                  description={item.scrapMemo ?? item.description}
                  onClick={() => navigate(`/post/${id}`)}
                />
                {idx !== items.length - 1 && <Divider />}
              </div>
            );
          })}
        </InnerWrapper>
      </FrameWrapper>
    </div>
  );
}

const Empty = styled.div`
  padding: 20px;
  color: #777;
`;
const FrameWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #909090;
`;
const InnerWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 35px;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Title = styled.div`
  color: #000;
  font-size: 20px;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  margin-bottom: 5px;
`;
const Description = styled.div`
  color: #767676;
  font-size: 20px;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
`;
const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #909090;
  margin-top: 15px;
`;
