import React from 'react';
import classes from './Container3.module.css';

import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container3({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <span className={classes.containerTitle}>
             Услуги
            </span>
            <div className={classes.containerBlock}
   <div className={classes.containerCard}>
    <div className={classes.containerCardTop}>
      <img src='/images/cm1.png'/>
      <img src='/images/cm2.png'/>
    </div>
    <div className={classes.containerCardBottom}>
      <span>Разработка интернет-порталов</span>
      <img src='/images/cm3.png'/>
    </div>
   </div>
   <div className={classes.containerCard}>
    <div className={classes.containerCardTop}>
      <img src='/images/cm4.png'/>
      <img src='/images/cm2.png'/>
    </div>
    <div className={classes.containerCardBottom}>
      <span>Разработка интернет-порталов</span>
      <img src='/images/cm5.png'/>
    </div>
   </div>
   <div className={classes.containerCard}>
    <div className={classes.containerCardTop}>
      <img src='/images/cm6.png'/>
      <img src='/images/cm2.png'/>
    </div>
    <div className={classes.containerCardBottom}>
      <span>Разработка интернет-порталов</span>
      <img src='/images/cm7.png'/>
    </div>
   </div>
   <div className={classes.containerCard}>
    <div className={classes.containerCardTop}>
      <img src='/images/cm8.png'/>
      <img src='/images/cm2.png'/>
    </div>
    <div className={classes.containerCardBottom}>
      <span>Разработка интернет-порталов</span>
      <img src='/images/cm9.png'/>
    </div>
   </div>
   <div className={classes.containerCard}>
    <div className={classes.containerCardTop}>
      <img src='/images/cm10.png'/>
      <img src='/images/cm2.png'/>
    </div>
    <div className={classes.containerCardBottom}>
      <span>Разработка интернет-порталов</span>
      <img src='/images/cm11.png'/>
    </div>
   </div>
   <div className={classes.containerCard}>
    <div className={classes.containerCardTop}>
      <img src='/images/cm12.png'/>
      <img src='/images/cm2.png'/>
    </div>
    <div className={classes.containerCardBottom}>
      <span>Разработка интернет-порталов</span>
      <img src='/images/cm13.png'/>
    </div>
   </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container3;
