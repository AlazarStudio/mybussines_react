import React from 'react';
import { useParams, Link } from 'react-router-dom';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';

function OneNewsPage({ children, ...props }) {
  const { title } = useParams();

  // Найти новость по заголовку
  const currentNews = news.find(
    (item) => item.title.replaceAll(' ', '-').replaceAll('«', '').replaceAll('»', '') === title
  );

  if (!currentNews) {
    return (
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <h1>Новость не найдена</h1>
            <Link to="/news">Вернуться к новостям</Link>
          </div>
        </WidthBlock>
      </CenterBlock>
    );
  }

  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerNav}>
              <Link to="/">Главная /</Link>
              <Link to="/news">Новости /</Link>
              <span>{currentNews.title}</span>
            </div>
            <div className={classes.newsContent}>
              <h1>{currentNews.title}</h1>
              <img src={currentNews.img} alt={currentNews.title} />
              <span>{currentNews.date}</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default OneNewsPage;
