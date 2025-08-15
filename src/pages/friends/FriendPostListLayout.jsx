import styled from "styled-components";
import PostCategory from "../../components/PostCategory";
import SortBar from "../../components/SortBar";
import Pagination from "../../components/Pagination";
import externalLink from "../../assets/icons/external-link.svg";
import rescrapPin from "../../assets/icons/pin_fill.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FrameWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  border: 1px solid #909090;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.div`
  color: black;
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
  margin-bottom: 5px;
`;

const Divider = styled.div`
  width: 100%;
  height: 0;
  border-bottom: 1px solid #909090;
  margin-top: 15px;
  margin-bottom: 0px;
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
  align-items: center;
  objectFit: "contain",
  flex-shrink: 0;
`;

// 재스크랩
const RescrapTag = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #767676;
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
`;

const RescrapIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const ContentItem = ({ title, description, onClick, isRescrapped }) => (
  <Item onClick={onClick} style={{ cursor: "pointer" }}>
    <TextWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {isRescrapped && (
        <RescrapTag>
          <RescrapIcon src={rescrapPin} />
          [내가 한 재스크랩]
        </RescrapTag>
      )}
    </TextWrapper>
    <Icon src={externalLink} />
  </Item>
);

export default function FriendPostListLayout({ posts }) {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "10px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <HeaderWrapper>
          <PostCategory activeTab={activeTab} onTabClick={setActiveTab} />
          <SortBar />
        </HeaderWrapper>
        <FrameWrapper>
          <InnerWrapper>
            {posts.map((item) => (
              <div key={item.id} style={{ width: "100%" }}>
                <ContentItem
                  title={item.title}
                  description={item.description}
                  isRescrapped={item.isRescrapped} 
                  onClick={() => navigate(`/post/${item.id}`)}
                />
                {item.id !== posts[posts.length - 1].id && <Divider />}
              </div>
            ))}
          </InnerWrapper>
        </FrameWrapper>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination currentPage={1} totalPages={5} />
      </div>
    </div>
  );
}
