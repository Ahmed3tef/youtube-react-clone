import { Fragment, useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Navbar, Sidebar, VideoCard } from './components';
import { Home } from './pages';

import './_app.scss';

const App = () => {
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);
  const hideSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  };
  useEffect(() => {
    const sidebarWidthEl = document.querySelector('.sidebar').offsetWidth + 17;
    setSidebarWidth(sidebarWidthEl);
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar hideSidebarHandler={hideSidebarHandler} />
        <div className='app__container'>
          <Sidebar showSidebar={showSidebar} />
          <main
            className='app__main'
            style={{ width: `calc(100vw - ${sidebarWidth}px)` }}>
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
