import { PostlistLayout } from './postlist';
import PostCategory from "./postlist/PostCategory";
import { PageHeader } from "../components/PageHeader";
import { useState } from "react";

export const Home = () => {
  const [activeTab, setActiveTab] = useState("all");
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
      <PostCategory activeTab={activeTab} onTabClick={setActiveTab} />
      <PostlistLayout />
    </div>
  );
};
