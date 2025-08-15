import { PostlistLayout } from './postlist';
import { PageHeader } from "../components/PageHeader";

export const Home = () => {
  return (
    <div
      style={{
        padding: 10,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <PageHeader title="링크집" />
      <PostlistLayout />
    </div>
  );
};
