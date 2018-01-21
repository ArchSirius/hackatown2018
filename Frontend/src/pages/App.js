import React from 'react';
import TopBar from '../components/TopBar';
import TopBarLinks from '../pages/TopBarLinks/TopBarLinks';

const App = ({ children }) => (
  <div style={{ minWidth: '980px' }}>
    <TopBar links={<TopBarLinks />} />
    <div>{children}</div>
  </div>
);

export default App;
