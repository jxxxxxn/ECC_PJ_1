import styled from 'styled-components';

const TabsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
`;

const TabContainer = styled.div`
  position: relative; /* 기준점 */
  height: 33px;
  width: fit-content;
  cursor: pointer;
`;

const Tab = styled.div`
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  color: ${(props) => (props.active ? 'black' : '#909090')};
  text-align: center;
  line-height: 33px;
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px; /* ✅ 명확한 높이 */
  background-color: black; /* ✅ outline 대신 사용 */
`;

export default function PostCategory({ activeTab, onTabClick }) {
  return (
    <TabsWrapper data-category="favorites">
      <TabContainer onClick={() => onTabClick('all')}>
        <Tab active={activeTab === 'all'}>전체</Tab>
        {activeTab === 'all' && <Underline />}
      </TabContainer>

      <TabContainer onClick={() => onTabClick('favorites')}>
        <Tab active={activeTab === 'favorites'}>즐겨찾기</Tab>
        {activeTab === 'favorites' && <Underline />}
      </TabContainer>
    </TabsWrapper>
  );
}
