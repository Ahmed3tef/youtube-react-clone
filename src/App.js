import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Header, Sidebar } from './components';
import { Home } from './pages';

import './_app.scss';

const App = () => (
  <Fragment>
    <Header />
    <div className='app__container'>
      <Sidebar />
      <Container fluid className='app__main'>
        <Home />
      </Container>
    </div>
  </Fragment>
);

export default App;
