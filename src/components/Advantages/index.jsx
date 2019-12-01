import React from 'react';
import './index.css';
import Item from './item.jsx';
import comp from '../../img/comp.png';
import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';
import icon4 from '../../img/icon4.png';
import icon5 from '../../img/icon5.png';
import icon6 from '../../img/icon6.png';

function Advantages() {
  return (
    <div className="layer1">
      <img src={comp} alt="secure computer" className="computerImg" />
      <div className="text">
        <h1 className="hAdv">Наши преимущества:</h1>
        <div className='container'>
            <Item src={icon1} text ='Praesent metus quam, condimentum at nisi et, euismod maximus sem.'/>
            <Item src={icon2} text ='Fusce tempor ut nisi ut imperdiet.'/>
            <Item src={icon3} text ='Morbi sodales turpis velit, in rhoncus nisi dignissim vitae.'/>
            <Item src={icon4} text ='Vivamus elit odio, pulvinar non massa id, tincidunt ultricies sapien.'/>
            <Item src={icon5} text ='Vestibulum varius, arcu orci sagittis orci, non ornare mauris sapien in nibh.'/>
            <Item src={icon6} text ='Nullam luctus quam justo, non luctus felis placerat et.'/>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
