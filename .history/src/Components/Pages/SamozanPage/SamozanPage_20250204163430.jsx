import React from 'react';
import classes from './SamozanPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function SamozanPage({ children, ...props }) {
  return (
    <>
    <div className={classes.containerTop}>
<img src='/images/samozan1.png'/>
<CenterBlock><WidthBlock></WidthBlock></CenterBlock>
<img src='/images/samozan2.png'/>
    </div>

    </>
  );
}

export default SamozanPage;
