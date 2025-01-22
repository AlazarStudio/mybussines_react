import React from 'react';
import { useParams, Link } from 'react-router-dom';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';

function OneNewsPage() {
  const { title } = useParams(); // Получаем title из параметра маршрута

  // Форматируем заголовок, заменяя дефисы на пробелы и декодируя URI
  const formattedTitle = decodeURIComponent(title).replaceAll('-', ' ');

  // Ищем новость по заголовку
  const currentNews = news.find((item) => item.title === formattedTitle);

  // Если новость не найдена, выводим сообщение
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

  // Если новость найдена, отображаем её
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            {/* Навигация */}
            <div className={classes.containerNav}>
              <Link to="/">Главная</Link> / <Link to="/news">Новости</Link> /{' '}
              <span>{currentNews.title}</span>
            </div>

            {/* Содержание новости */}
            <div className={classes.newsContent}>
              <h1>{currentNews.title}</h1>
              <p><strong>Дата публикации:</strong> {currentNews.date}</p>
              <img
                src={currentNews.img}
                alt={currentNews.title}
                style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }}
              />
              <p>{currentNews.description}</p>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default OneNewsPage;
