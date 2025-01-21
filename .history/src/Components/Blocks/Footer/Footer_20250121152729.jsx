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
                <span onClick={() => navigate('/')}>Новости</span>
                <span onClick={() => navigate('/')}>Меры поддержки</span>
                <span onClick={() => navigate('/')}>Услуги</span>
                <span>О нас</span>
                <div className={classes.containerTopNumber}>
                  <div>8 (8782) 25-02-27</div>
                  <div>Телефон поддержки</div>
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
