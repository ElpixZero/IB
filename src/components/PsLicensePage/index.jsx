import React from 'react';
import './index.css'

function Main() {
  return (
    <div className="lp">
        <div className="lpAddLicenseBlock">
          <h3 className="lpTitle lpAddLicenseTitle">Добавить лицензию</h3>
          <div className="lpAddLicenseBlockContent">
            <div className="licenseView lpLicenseView ">XXXX-XXXX-XXXX-XXXX</div>
            <button className="addLicense">Добавить</button>
          </div>
        </div>
        <div className="lpActiveLicenses">
          <div className="lpActiveLicenseView">
            <h3 className="lpTitle lpActiveLicenseTitle">Активные лицензии</h3>
            <div className="lpAddLicenseBlockContent">
              <div className="lpActiveLicenseIcon">Иконка лицензии</div>
              <div className="lpActiveLicenseContent">
                <h4 className="lpActiveLicenseCardTitle">Название решения</h4>
                <p className="lpActiveLicenseKey">Лицензионный ключ: YTFRU-50HNH-OI2BE-M16CS-PE4V7U</p>
                <p className="lpActiveLicenseDate">Дата окончания лицензии: 05.10.2020</p>
              </div>
            </div>

            <div className="lpAddLicenseBlockContent">
              <div className="lpActiveLicenseIcon">Иконка лицензии</div>
              <div className="lpActiveLicenseContent">
                <h4 className="lpActiveLicenseCardTitle">Название решения</h4>
                <p className="lpActiveLicenseKey">Лицензионный ключ: YTFRU-50HNH-OI2BE-M16CS-PE4V7U</p>
                <p className="lpActiveLicenseDate">Дата окончания лицензии: 05.10.2020</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Main;
