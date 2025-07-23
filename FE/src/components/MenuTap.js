import logo from "../assets/logo.png";
import "./MenuTap.style.css";
import { IoHome } from "react-icons/io5";

export const MenuTap = () => {
  return (
    <>
      <div style={{ borderRight: "1px solid #d7d7d7", height: "100vh" }}>
        <div className="container">
          <div className="icon-container">
            <img src={logo} alt="Linkrap Logo" className="logo" />
            <IoHome className="home-icon" />
          </div>
          <p>메뉴탭입니다</p>
        </div>
      </div>
    </>
  );
};
