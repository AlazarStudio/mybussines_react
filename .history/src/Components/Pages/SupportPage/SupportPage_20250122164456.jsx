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
            <span>Меры поддержки</span>
        </div>
      </div>
    </>
  );
}

export default SupportPage;
