import React from "react";
import { Header, MenuTap } from "../components";

export const Home = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <MenuTap />
        <Header />
      </div>
      <p>홈이에용</p>
    </div>
  );
};
