import React from 'react';

import About from '../components/About';
import Advantages from '../components/Advantages/index.jsx';
import ForgetPasswordWindow from '../components/Modals/resetPassword';

const styles = {
  'maxWidth': '1600px',
  'margin': '0 auto',
};

function Main() {
  return (
    <div style={styles}>
      <About />
      <Advantages />
    </div>
  );
}

export default Main;
