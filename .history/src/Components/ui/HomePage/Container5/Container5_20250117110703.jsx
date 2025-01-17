import React from 'react';
import classes from './Container5.module.css';

function Container5({ children, ...props }) {
  return (
    <>
      <div className={classes.title}>Последние новости</div>
    </>
  );
}

export default Container5;
