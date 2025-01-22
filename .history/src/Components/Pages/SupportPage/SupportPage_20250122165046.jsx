import React from 'react';

import classes from './SupportPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import SupportPageNav from '../../ui/SupportPage/SupportPageNav';

function SupportPage({ children, ...props }) {
  return (
    <>
      <div className={classes.containerTop}>
        <SupportPageNav />
        <img src="/images/R67.png" className={classes.imgBack} />
        <img src="/images/444.png" className={classes.img1} />
        <img src="/images/555.png" className={classes.img2} />
        <img src="/images/Layer1.png" className={classes.img3} />
        <div className={classes.containerTopTitle}>
          <span cla>
            Меры поддержки для предпринимателей Карачаево-Черкесской республики
          </span>
          <div className={classes.containerTopTitleImg}>
            <img src="/images/.png" />
            <img src="/images/.png" />
          </div>
          <div className={classes.containerTopTitleSpan}>
            <span>Федеральные</span>
            <span>Региональные</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportPage;
