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
        <img src='/images/'
        {/* <img src='/images/444.png' className={classes.img1}/>
        <img src='/images/555.png' className={classes.img2}/> */}
      </div>
    </>
  );
}

export default SupportPage;
