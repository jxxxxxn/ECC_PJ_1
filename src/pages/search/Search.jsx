import styled from "styled-components";
import { PageHeader, LinkMind } from "../../components";
import SearchlistLayout from "./SearchlistLayout";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!keyword) {
      setItems([]);
      return;
    }
    setLoading(true);
    api
      .get("/scraps/search", { params: { keyword } })
      .then(({ data }) => {
        const payload = data?.data ?? data;
        const arr = Array.isArray(payload?.content)
          ? payload.content
          : Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.data)
          ? payload.data
          : [];
        setItems(arr);
      })
      .catch((err) => {
        console.log("검색 실패:", err.response?.data || err.message);
        setItems([]);
      })
      .finally(() => setLoading(false));
  }, [keyword]);

  return (
    <div
      style={{
        padding: 10,
        flex: 3,
        display: "flex",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <TitleWrapper>
        <PageHeader title={keyword} />
        <SearchText>에 대해 찝어봤어요!</SearchText>
      </TitleWrapper>

      <div style={{ flex: 3, display: "flex", gap: 35 }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 15,
          }}
        >
          {loading ? (
            <div style={{ padding: 20, color: "#777" }}>불러오는 중…</div>
          ) : (
            <SearchlistLayout items={items} />
          )}
        </div>
        <div style={{ flex: 1 }}>
          <LinkMind />
        </div>
      </div>
    </div>
  );
};

const SearchText = styled.div`
  color: #767676;
  font-size: 20px;
  font-family: "Pretendard";
  fontweight: 600;
  padding: 12px 0px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
`;
