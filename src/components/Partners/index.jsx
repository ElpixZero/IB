import React from 'react';
import './index.css';
import kasper from '../../img/kaspersky.png';
import cisco from '../../img/cisco.png';
import extreme from '../../img/extreme.png';
import oracle from '../../img/oracle.png';
import crypt from '../../img/crypt.png';
import rvision from '../../img/rvision.png';
import kod from '../../img/kod.png';
import check from '../../img/checkpoint.png';
import sophos from '../../img/sophos.png';
import rsa from '../../img/rsa.png';
import eset from '../../img/eset.png';
import postini from '../../img/postini.png';

function About() {
  return (
    <div className="P_main">
      <div className="P_container">
        <div className="P_text">
          <p className="P_title">Наши партнёры</p>
          <p className="P_content">
            Наша компания работает с ведущими производителями программного и
            аппаратного обеспечения, чтобы создать наилучшие возможные решения в
            сфере информационной безопасности. Мы заключили соглашения о
            стратегическом партнерстве с лидерами отрасли по всему миру. Эти
            партнерские отношения служат основой для повышения качества услуг и
            продуктов.
          </p>
        </div>
        <div className="P_flexshit">
                <img className='P_img' src={kasper} />
                <img className='P_img' src={cisco} />
                <img className='P_img' src={extreme} />
                <img className='P_img' src={oracle} />
                <img className='P_img' src={crypt} />
                <img className='P_img' src={check} />
                <img className='P_img' src={rvision} />
                <img className='P_img' src={kod} />
                <img className='P_img' src={sophos} />
                <img className='P_img' src={rsa} />
                <img className='P_img' src={eset} />
                <img className='P_img' src={postini} />
        </div>
      </div>
    </div>
  );
}

export default About;