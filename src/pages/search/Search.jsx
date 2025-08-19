import styled from "styled-components";
import { PageHeader, LinkMind } from "../../components";
import SearchlistLayout from "./SearchlistLayout";
import { useSearchParams } from "react-router-dom";

const SearchText = styled.div`
  color: #767676;
  font-size: 20px;
  font-family: 'Pretendard';
  fontWeight: 600;
  padding: 12px 0px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
`;

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div style={{ padding: 10, flex: 3, display: "flex", flexDirection: "column", gap: "15px", }}>
      <TitleWrapper>
        <PageHeader title={query}/>
        <SearchText>에 대해 찝어봤어요!</SearchText>

      </TitleWrapper>
      <div style={{ flex: 3, display: "flex", flexDirection: "row", gap: "35px", }}>
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "15px", }}>  
          <SearchlistLayout/>
        </div>
        <div style={{ flex: 1, marginTop: "30px", }}> 
          <LinkMind />
        </div>
      </div>
    </div>
  );
};
