import { MdMenu } from 'react-icons/md';

import './_navbar.scss';
import LogoImg from '../../img/logo.png';

const Navbar = ({ hideSidebarHandler }) => {
  return (
    <div className='navbar'>
      <div className='logo__container'>
        <div
          className='navbar__menuIcon'
          onClick={() => {
            hideSidebarHandler();
          }}>

          <MdMenu />
        </div>
        <div className='logo'>
          <img src={LogoImg} alt='logo' className='logo__img' />
          <span className='logo__text'>YouTube</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
