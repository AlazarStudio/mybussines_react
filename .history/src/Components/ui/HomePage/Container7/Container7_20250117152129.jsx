import React from 'react';
import classes from './Container7.module.css';
import { news } from '../../../../../bd';
import { useNavigate } from 'react-router-dom';

function Container7({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.title}>
        <span>Последние новости</span>
        <button onClick={() => navigate('/ыукмшс')}>Смотреть все</button>
      </div>
      <div className={classes.container}>
        {news.map((el) => (
          <div className={classes.containerCard} key={el.id}>
            <img src={el.img} className={classes.containerCardImg} />
            <div className={classes.containerCardCenter}>
              <img src="/images/newsRec.png" />
              <span>{el.title}</span>
            </div>
            <div className={classes.containerCardBottom}>
              <span>{el.date}</span>
              <span
                className={classes.readMore}
                onClick={() =>
                  navigate(
                    `/news/${el.title
                      .replaceAll(' ', '-')
                      .replaceAll('«', '')
                      .replaceAll('»', '')}`
                  )
                }
              >
                Читать дальше {'>>'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Container7;
