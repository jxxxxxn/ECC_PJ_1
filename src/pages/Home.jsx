import { PostlistLayout } from './postlist';
import { PageHeader } from "../components/PageHeader";
import LinkMind from "../components/LinkMind";

export const Home = () => {
  return (
    <div style={{ padding: 10, flex: 3, display: "flex", flexDirection: "column", gap: "15px", }}>
      <PageHeader title="링크집" />
      <div style={{ flex: 3, display: "flex", flexDirection: "row", gap: "35px", }}>
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "15px", }}>  
          <PostlistLayout />
        </div>
        <div style={{ flex: 1, marginTop: "30px", }}> 
          <LinkMind />
        </div>
      </div>
    </div>
  );
};
