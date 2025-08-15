import styled from "styled-components";
import PostCategory from "../../components/PostCategory";
import SortBar from "../../components/SortBar";
import Pagination from "../../components/Pagination";
import externalLink from "../../assets/icons/external-link.svg";
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
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
  padding: 15px 35px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.div`
  color: black;
  font-size: 22px;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  margin-bottom: 5px;
`;

const Description = styled.div`
  color: #767676;
  font-size: 18px;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
`;

const Divider = styled.div`
  width: 100%;
  height: 0;
  border-bottom: 1px solid #909090;
  margin-top: 15px;
  margin-bottom: 0px;
`;

const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  align-items: center;
  flex-shrink: 0;
`;

const Icon = () => {
  return (
    <img
      src={externalLink}
      alt="아이콘"
      style={{
        width: "35px",
        height: "35px",
        objectFit: "contain",
      }}
    />
  );
};

const ContentItem = ({ title, description, onClick }) => (
  <Item onClick={onClick} style={{ cursor: "pointer" }}>
    <TextWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </TextWrapper>
    <IconWrapper>
      <Icon />
    </IconWrapper>
  </Item>
);

export default function PostlistLayout() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const contentData = [
    {
      id: 1,
      title: "여름 넘모 더운데 우짜나~*~*~*~~*~**~*~*~",
      description: "내 여름 추구미....**",
    },
    ...Array(4)
      .fill({ title: "제목", description: "내용" })
      .map((item, i) => ({ ...item, id: i + 2 })),
  ];

  return (
    // 중앙정렬
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <HeaderWrapper>
          <PostCategory activeTab={activeTab} onTabClick={setActiveTab} />
          <SortBar />
        </HeaderWrapper>
        <FrameWrapper>
          <InnerWrapper>
            {contentData.map((item) => (
              <div key={item.id} style={{ width: "100%" }}>
                <ContentItem
                  title={item.title}
                  description={item.description}
                  onClick={() => navigate(`/post/${item.id}`)}
                />
                {item.id !== contentData[contentData.length - 1].id && (
                  <Divider />
                )}
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
