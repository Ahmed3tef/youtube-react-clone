import { MdMenu, MdSearch, MdMic } from "react-icons/md";
import Icon from "../icon/Icon";

import "./_navbar.scss";
import LogoImg from "../../img/logo.png";

const Navbar = ({ hideSidebarHandler }) => {
  return (
    <div className="navbar">
      <div className="logo__container">
        <div
          className="navbar__menuIcon"
          onClick={() => {
            hideSidebarHandler();
          }}
        >
          <MdMenu />
        </div>
        <div className="logo">
          <img src={LogoImg} alt="logo" className="logo__img" />
          <span className="logo__text">YouTube</span>
        </div>
        <div className="searchBar">
          <input
            placeholder="Search"
            className="searchBar__input"
            type="text"
          />
          <Icon className="searchBar__searchIcon">
            <MdSearch />
          </Icon>
          <Icon className="searchBar__micIcon">
            <MdMic />
          </Icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
