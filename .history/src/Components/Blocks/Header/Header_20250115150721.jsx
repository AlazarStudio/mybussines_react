import React from 'react';
import classes from './Header.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function Header({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerLeft}>
              <img src="/images/logo.png" className={cl} />
              <button>
                <img src="/images/.png" />
                <span>Меню</span>
              </button>
            </div>
            <div className={classes.containerRight}>
              <img src="/images/.png" />
              <img src="/images/.png" />
              <img src="/images/.png" />
              <span>Горячая линия 8(800)201-32-99</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Header;
