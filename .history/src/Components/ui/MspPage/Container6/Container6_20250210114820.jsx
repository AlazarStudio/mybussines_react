import React from 'react';
import classes from './Container6.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';

function Container6({ children, ...props }) {
  return (
    <>
<div className={classes.title}>src/Components/ui/MspPage/Container5</div>
<div className={classes.container}>
  <div className={classes.containerLeft}>
    <img src='/images/mspBig.png'/>
  </div>
  <div className={classes.containerRight}></div>
</div>
    </>
  );
}

export default Container6;
