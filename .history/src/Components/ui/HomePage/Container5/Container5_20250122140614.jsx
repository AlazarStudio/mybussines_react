import React from 'react';
import classes from './Container5.module.css';
import { news } from '../../../../../bd';
import { useNavigate } from 'react-router-dom';

function Container5({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.title}>
        <span>Последние новости</span>
        <button onClick={() => navigate('/news')}>Смотреть все</button>
      </div>
      <div className={classes.container}>
      {news.map((el) => (
        <div className={classes.containerCard} key={el.id}>
          {/* Картинка новости */}
          <img src={el.img} className={classes.containerCardImg} alt={el.title} />

          {/* Центр карточки с заголовком */}
          <div className={classes.containerCardCenter}>
            <img src="/images/newsRec.png" alt="Иконка новости" />
            <span>{el.title}</span>
          </div>

          {/* Нижняя часть карточки */}
          <div className={classes.containerCardBottom}>
            <span>{el.date}</span>
            {/* Кнопка "Подробнее" */}
            <span
              className={classes.readMore}
              onClick={() =>
                navigate(
                  `/news/${encodeURIComponent(
                    el.title.replaceAll(' ', '-').replaceAll('«', '').replaceAll('»', '')
                  )}`
                )
              }
            >
              Подробнее
            </span>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default Container5;
