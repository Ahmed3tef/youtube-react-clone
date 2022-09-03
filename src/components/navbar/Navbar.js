import { MdMenu } from "react-icons/md";
import Icon from "../icon/Icon";

import "./_navbar.scss";
import LogoImg from "../../img/logo.png";

const Navbar = () => {
  console.log(LogoImg);
  return (
    <div className="navbar">
      <div className="logo__container">
        <Icon className="navbar__menu icon">
          <MdMenu />
        </Icon>
        <div className="logo">
          <img src={LogoImg} alt="logo" className="logo__img" />
          <span className="logo__text">YouTube</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
