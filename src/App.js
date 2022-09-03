import React, { Fragment, useState } from 'react';
import { Navbar, Sidebar } from './components';
import { Home } from './pages';

import './_app.scss';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const hideSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Fragment>
      <Navbar hideSidebarHandler={hideSidebarHandler} />
      <div className='app__container'>
        <Sidebar showSidebar={showSidebar} />
        <div fluid className='app__main'>
          <Home />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
