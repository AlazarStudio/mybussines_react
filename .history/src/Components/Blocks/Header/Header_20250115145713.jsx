import React from 'react';
import classes from './Header.module.css';

function Header({ children, ...props }) {
  return (
    <>
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
        </div>
      </div>
    </>
  );
}

export default Header;
