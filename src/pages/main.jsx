import React from 'react';

import About from '../components/About';
import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';
import Advantages from '../components/Advantages/index.jsx';
const styles = {
  'maxWidth': '1600px',
  'margin': '0 auto',
};

function Main() {
  return (
    <div style={styles}>
      <Header />
    </div>
  );
}

export default Main;
