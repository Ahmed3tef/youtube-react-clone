import { MdMenu } from 'react-icons/md';
import Icon from '../icon/Icon';

import './_navbar.scss';

const Navbar = () => (
  <div className='navbar'>
    <div className='logo__container'>
      <Icon className='navbar__menu icon'>
        <MdMenu />
      </Icon>
      <div className='logo'>
        <img src='../../img/logo.png' alt='logo' className='logo__img' />
        <span className='logo__text'>YouTube</span>
      </div>
    </div>
  </div>
);

export default Navbar;
