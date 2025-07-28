import { Header, MenuTap } from "../components";

export const Home = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <MenuTap />
        <Header />
        <p>홈</p>
      </div>
    </div>
  );
};
