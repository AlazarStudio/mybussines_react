import React from 'react';
import classes from './SamozanPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function SamozanPage({ children, ...props }) {
  return (
    <>
      <div className={classes.containerTop}>
        <img src="/images/samozan1.png" />
        <CenterBlock>
          <WidthBlock>
            <div className={classes.containerTopText}>
                <
            </div>
            <img src="/images/samozan2.png" />
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}

export default SamozanPage;
