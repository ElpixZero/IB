import React from 'react';

import Header from '../components/header.js';
import Footer from '../components/footer.js';


function Main() {
  return (
    <div>
        <Header main={true} />

        

        <Footer main={true} />
        {/* THIS IS BIG COMPONENT, THAT CONSIST OF SMALLER ONES
            ADD THEM LIKE ONE ABOVE                           */}
    </div>
  );
}

export default Main;
