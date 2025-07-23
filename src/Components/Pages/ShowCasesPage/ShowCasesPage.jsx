import React, { useEffect } from 'react';
import classes from './ShowCasesPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useLocation, useNavigate } from 'react-router-dom';

function ShowCasesPage({ children, ...props }) {
  const navigate = useNavigate()

    const location = useLocation();

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // скролл вверх при изменении маршрута

  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerTop}>
              <div className={classes.containerTopLeft}>
                <div className={classes.spanColor}>
                <span>ВИТРИНА</span>
                <span>ПРЕДПРИНИМАТЕЛЕЙ</span>
                </div>
                <span>
                  Возможность привлечь новых клиентов, вывести свой проект на
                  новый уровень⁠
                </span>
                <button onClick={() => navigate('/contacts#bid')}>Оставить заявку</button>
              </div>
              <img src='/images/showImg.png'/>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default ShowCasesPage;
