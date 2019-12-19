import React from 'react';
import PersonalSpaceLoginIcon from '../../img/PersonalSpaceLoginIcon.svg';
import personalSpaceSidebarMainIcon from '../../img/personalSpaceSidebarMainIcon.svg';
import PersonalSpaceProfileIcon from '../../img/PersonalSpaceProfileIcon.svg';
import PersonalSpaceOfficialIcon from '../../img/PersonalSpaceOfficialIcon.svg';
import './index.css';

const styles = {
  maxWidth: '1600px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
};

function Main() {
  return (
    <div className="lkContainer" style={styles}>
      <div className="lkSidebar">
        <div className="lkSidebarTitle">
          <img src={PersonalSpaceLoginIcon} />
          <span className="lkSidebarTitleText">Логин</span>
        </div>
        <div className="lkSidebarContent">
          <ul>
            <li className="lkSidebarContentElem">
              <img src={personalSpaceSidebarMainIcon} />
              <span className="lkSidebarContentElemText">Главная</span>
            </li>
            <li className="lkSidebarContentElem">
              <img src={PersonalSpaceProfileIcon} />
              <span className="lkSidebarContentElemText">Профиль</span>
            </li>
            <li className="lkSidebarContentElem">
              <img src={PersonalSpaceOfficialIcon} />
              <span className="lkSidebarContentElemText">Лицензии</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="lkMainScreen">
        <h3 className="lkMainScreenTitle">Уведомления и активность</h3>
        <div className="lkMainScreenSlider">слайдер</div>
        <div className="lkMainScreenNotifs">нотификации</div>
      </div>
    </div>
  );
}

export default Main;
