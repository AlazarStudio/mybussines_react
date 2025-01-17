import React from 'react';
import classes from './Container5.module.css';
import {news} from '../../../../../bd'

function Container5({ children, ...props }) {
  return (
    <>
      <div className={classes.title}>Последние новости</div>
      <div className={classes.container}>
        {news}
        <div className={classes.containerCard}>
          
        </div>
      </div>
    </>
  );
}

export default Container5;
