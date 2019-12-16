import React from 'react';

import About from '../components/About';
import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';
import Advantages from '../components/Advantages/index.jsx';
import AuthModalWindow from '../components/AuthModalWindow';
import ForgetPasswordWindow from '../components/Modals/resetPassword';

const styles = {
  'maxWidth': '1600px',
  'margin': '0 auto',
};

function Main() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div style={styles}>
      <Header setOpenLoginWindow={setOpen} />
      <AuthModalWindow isOpen={isOpen} setClose={setOpen} />
      <About />
      <Advantages />
      <Footer />
    </div>
  );
}

export default Main;
