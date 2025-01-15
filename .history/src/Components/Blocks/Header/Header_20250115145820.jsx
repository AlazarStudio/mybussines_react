import React from 'react';
import classes from './Header.module.css';

function Header({ children, ...props }) {
  return (
    <>
    <Center
      <div className={classes.container}>
        <div className={classes.containerLeft}>
          <img src="/images/.png" />
          <button>
            <img src="/images/.png" />
            <span>Меню</span>
          </button>
        </div>
        <div className={classes.containerRight}>
            <img src='/images/.png'/>
            <img src='/images/.png'/>
            <img src='/images/.png'/>
            <span>Горячая линия 8(800)201-32-99</span>
        </div>
      </div>
    </>
  );
}

export default Header;
