import React from 'react';
import Slider from '../Slider';
import PSNotifications from '../PSNotifications';

function Main() {
  return (
    <div className="lkMainScreen">
        
        <h3 className="lkMainScreenTitle">Уведомления и активность</h3>
        <div className="lkMainScreenSlider">
          <Slider />
        </div>
        <div className="lkMainScreenNotifs">
          <PSNotifications />
        </div>
      </div>
  );
}

export default Main;
