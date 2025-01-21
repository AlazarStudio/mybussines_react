import React from 'react';
import classes from './Footer.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Footer({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.container100vh}>
        <CenterBlock>
          <WidthBlock>
            <div className={classes.container}>
              <div className={classes.containerTop}>
                <span onClick={() => navigate('news')}>Новости</span>
                <span onClick={() => navigate('/supports')}>
                  Меры поддержки
                </span>
                <span onClick={() => navigate('/service')}>Услуги</span>
                <span onClick={() => navigate('/about')}>О нас</span>
                <div className={classes.containerTopNumber}>
                  <a href="tel:+78782250227">8 (8782) 25-02-27</a>

                  <div>Телефон поддержки</div>
                </div>
              </div>
              <div className={classes.containerBottom}>
                <div className={classes.containerBottomLeft}>
                    <span>&copy; 2023 </span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={classes.containerBottomRight}></div>
              </div>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}

export default Footer;
