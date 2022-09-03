import React, { Fragment } from 'react';
import { Navbar, Sidebar } from './components';
import { Home } from './pages';

import './_app.scss';

const App = () => (
  <Fragment>
    <Navbar />
    <div className='app__container'>
      <Sidebar />
      <div fluid className='app__main'>
        <Home />
      </div>
    </div>
  </Fragment>
);

export default App;
