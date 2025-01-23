import React from 'react';
import classes from './SupportPageAll.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

export default function SupportPageAll() {
  return <>
  <div className={classes.back}>
    <CenterBlock>
      <WidthBlock>
        <div className={classes.containerGroup}>
          <input placeholder='Найти'/>
          <div className=''
        </div>
      </WidthBlock>
    </CenterBlock>
  </div>
  </>;
}
