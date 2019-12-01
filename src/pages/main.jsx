import React from 'react';
import About from '../components/About';
import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';

function Main() {
  return (
    <div>
      <Header main={true} />
      

      <Footer main={true} />
    </div>
  );
}

export default Main;