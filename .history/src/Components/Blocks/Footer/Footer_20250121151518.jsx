import React from 'react';
import classes from './Footer.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function Footer({ children, ...props }) {
  return (
    <>
      <div className={classes.container100vh}>
        <CenterBlock>
          <WidthBlock>
            <div className={classes.container}>
              <div className={classes.containerTop}>
                <span>Новости</span>
                <span>Меры поддержки</span>
                <span>Услуги</span>
                <span>О нас</span>
                <div className={classes.containerTopNumber}>
                    <div>8 3123 23423</div>
                </div>
              </div>
              <div className={classes.containerBottom}></div>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}

export default Footer;
