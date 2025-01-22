import React, { useState } from 'react';

import classes from './SupportPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import SupportPageNav from '../../ui/SupportPage/SupportPageNav';

function SupportPage({ children, ...props }) {
  const [activeTab, setActiveTab] = useState('federal'); // Начальное состояние

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Устанавливаем активный таб
  };
  return (
    <>
      <div className={classes.containerTop}>
        <SupportPageNav />
        <img src="/images/R67.png" className={classes.imgBack} />
        <img src="/images/444.png" className={classes.img1} />
        <img src="/images/555.png" className={classes.img2} />
        <img src="/images/Layer1.png" className={classes.img3} />
        <div className={classes.containerTopTitle}>
          <span className={classes.containerTopTitle1}>
            Меры поддержки для предпринимателей Карачаево-Черкесской республики
          </span>
          <div className={classes.containerTopTitleImg}>
            <img src="/images/gerb_rf 1.svg" />
            <img src="/images/gerb_kchr 1.svg" />
          </div>
          <div className={classes.containerTopTitleSpan}>
            <span
              className={`${classes.tab} ${
                activeTab === 'federal' ? classes.active : ''
              }`}
              onClick={() => handleTabClick('federal')}
            >
              Федеральные
            </span>
            <span
              className={`${classes.tab} ${
                activeTab === 'regional' ? classes.active : ''
              }`}
              onClick={() => handleTabClick('regional')}
            >
              Региональные
            </span>
            <div
              className={classes.slider}
              style={{
                transform:
                  activeTab === 'federal'
                    ? 'translateX(0)'
                    : 'translateX(100%)',
                background:
                  activeTab === 'federal'
                    ? 'linear-gradient(90deg, blue,rgba(217, 217, 217, 0.102)' // Градиент от синего к белому
                    : 'linear-gradient(90deg, pink, purple)', // Градиент от розового к фиолетовому
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportPage;
