import React from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';
import { Link, useParams } from 'react-router-dom';

function OneNewsPage() {
  const { title } = useParams();

  // Декодируем заголовок из URL
  const decodedTitle = decodeURIComponent(title);

  // Ищем новость по заголовку
  const currentNews = news.find(
    (item) =>
      encodeURIComponent(
        item.title.replaceAll('«', '').replaceAll('»', '')
      ) === decodedTitle
  );

  if (!currentNews) {
    return (
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <h1>Новость не найдена</h1>
            <Link to="/news">Вернуться к списку новостей</Link>
          </div>
        </WidthBlock>
      </CenterBlock>
    );
  }

  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.container}>
          <div className={classes.containerNav}>
            <Link to="/">Главная /</Link>
            <Link to="/news">Новости /</Link>
            <span>{currentNews.title}</span>
          </div>
          <h1>{currentNews.title}</h1>
          <img src={currentNews.img} alt={currentNews.title} />
          <p>{currentNews.description}</p>
          <span>{currentNews.date}</span>
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default OneNewsPage;
