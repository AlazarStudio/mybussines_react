import React, { useEffect } from 'react';
import classes from './BasePage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useLocation } from 'react-router-dom';

function BasePage({ children, ...props }) {

    const location = useLocation();

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // скролл вверх при изменении маршрута
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <input placeholder="Искать в базе знаний" />
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default BasePage;
