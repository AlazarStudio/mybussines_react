import React from 'react';
import classes from './SupportPageAll.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

export default function SupportPageAll() {
  return <>
  <div className={classes.back}>
    <CenterBlock>
      <WidthBlock>
        <div className={classes.containerAll}></div>
      </WidthBlock>
    </CenterBlock>
  </div>
  </>;
}
