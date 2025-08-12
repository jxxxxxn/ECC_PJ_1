import styled from 'styled-components';

const TabsWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
`;

const Tab = styled.div`
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  color: ${({ $active }) => ($active ? 'black' : '#909090')};
  text-align: center;
  line-height: 33px;
  cursor: pointer;

  text-decoration: ${({ $active }) => ($active ? 'underline' : 'none')};
  text-underline-offset: 8px;
  text-decoration-thickness: 1px;
`;

export default function PostCategory({ activeTab, onTabClick }) {
  const tabs = [
    { id: 'all', label: '전체' },
    { id: 'favorites', label: '즐겨찾기' }
  ];

  return (
    <TabsWrapper>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          $active={activeTab === tab.id} 
          onClick={() => onTabClick(tab.id)}
        >
          {tab.label}
        </Tab>
      ))}
    </TabsWrapper>
  );
}
