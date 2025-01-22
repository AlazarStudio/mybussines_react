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
        <img
      </div>
    </>
  );
}

export default SupportPage;
