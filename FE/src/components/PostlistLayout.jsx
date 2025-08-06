import styled from 'styled-components';
import SortBar from "../components/SortBar";
import Pagenation from "../components/Pagenation";
import externalLink from "../assets/icons/external-link.svg";

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
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  margin-bottom: 5px;
`;

const Description = styled.div`
  color: #767676;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
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

const ContentItem = ({ title, description }) => (
  <Item>
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
  const contentData = [
    {
      title: '여름 넘모 더운데 우짜나~*~*~*~~*~**~*~*~',
      description: '내 여름 추구미....**',
    },
    ...Array(5).fill({ title: '제목', description: '내용' }),
  ];

  return (
    // 중앙정렬
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}> 
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <SortBar />
        <FrameWrapper>
          <InnerWrapper>
            {contentData.map((item, index) => (
              <div key={index} style={{ width: "100%" }}>
                <ContentItem
                  title={item.title}
                  description={item.description}
                />
                {index < contentData.length - 1 && <Divider />}
              </div>
            ))}
          </InnerWrapper>
        </FrameWrapper>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagenation currentPage={1} totalPages={5} />
      </div>
    </div>
    
);
}
