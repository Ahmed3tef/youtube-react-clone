import React, { Fragment, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Navbar, Sidebar, VideoCard } from './components';
import { Home } from './pages';

import './_app.scss';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const hideSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar hideSidebarHandler={hideSidebarHandler} />
        <div className='app__container'>
          <Sidebar showSidebar={showSidebar} />
          <main className='app__main'>
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                {/* <Route path='video'>
                  <Route path=':id' element={<VideoCard />} />
                </Route> */}
              </Route>
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Fragment>
  );
};
export default App;
