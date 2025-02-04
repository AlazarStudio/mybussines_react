import React from 'react';
import classes from './SamozanPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function SamozanPage({ children, ...props }) {
  return (
    <>
      <div className={classes.containerTop}>
        {/* <img src="/images/samozan1.png" className={classes.img1} /> */}
        <CenterBlock>
          <WidthBlock>
            <div className={classes.containerTopText}>
              <span>КАК СТАТЬ САМОЗАНЯТЫМ</span>
              <span>Построить бизнес просто — стань самозанятым</span>
              <button>Записаться на консультацию</button>
            </div>
            <img src="/images/samozan2.png" />
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}

export default SamozanPage;
