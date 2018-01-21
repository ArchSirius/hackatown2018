import React from 'react';
import { connect } from 'react-redux';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import TopBarLinks from '../pages/TopBarLinks';

const App = ({ children }) => (
  <div style={{ minWidth: '980px' }}>
    <TopBar links={<TopBarLinks />} />
    <div>{children}</div>
    <Footer />
  </div>
);


export default App;
