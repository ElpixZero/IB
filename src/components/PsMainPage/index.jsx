import React from 'react';
import Slider from '../Slider';
import PSNotifications from '../PSNotifications';

function Main() {
  return (
    <>
      <h3 className="lkMainScreenTitle">Уведомления и активность</h3>
      <div className="lkMainScreenSlider">
        <Slider />
      </div>
      <div className="lkMainScreenNotifs">
        <PSNotifications />
      </div>
      </>
  );
}

export default Main;
