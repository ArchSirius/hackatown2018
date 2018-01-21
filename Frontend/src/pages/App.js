import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import TopBarLinks from '../pages/TopBarLinks';

const App = ({ children }) => (
  <div
    style={{
      minWidth: '980px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <TopBar links={<TopBarLinks />} />
    <div style={{ flex: 1 }}>{children}</div>
    <Footer />
  </div>
);


export default App;
