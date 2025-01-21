import React from 'react';
import classes from './Container7.module.css';
import { service } from '../../../../../bd';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container7({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
    <CenterBlock><WidthBlock>
      <div className={classes.title}>
        <span>Популярные услуги</span>
        <button onClick={() => navigate('/service')}>Смотреть все</button>
      </div>
      <div className={classes.container}>
        {service.map((el) => (
          <div className={classes.containerCard} key={el.id}>
            <img src={el.img} className={classes.containerCardImg} />
            <img src="/images/roket.png" />
            <img src='/images/orangeSer.png'/>
            <div className={classes.containerCardBottom}>
              <span>{el.title}</span>
              <span
                className={classes.readMore}
                onClick={() =>
                  navigate(
                    `/service/${el.title
                      .replaceAll(' ', '-')
                      .replaceAll('«', '')
                      .replaceAll('»', '')}`
                  )
                }
              >
                <img src='/images/strelka.png'/>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Container7;
