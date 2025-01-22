import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import classes from './OneNewsPage.module.css';
import { news } from '../../../../bd';

function OneNewsPage() {
  const { title } = useParams();
  const navigate = useNavigate();

  // Форматирование заголовка из маршрута
  const formattedTitle = decodeURIComponent(title).replaceAll('-', ' ');

  // Поиск новости
  const currentNews = news.find((item) => item.title === formattedTitle);

  if (!currentNews) {
    return (
      <div>
        <h1>Новость не найдена</h1>
        <button onClick={() => navigate('/news')}>Вернуться к новостям</button>
      </div>
    );
  }

  return (
    <div className={classes.oneNewsContainer}>
      <nav className={classes.breadcrumb}>
        <Link to="/">Главная</Link> / <Link to="/news">Новости</Link> /{' '}
        <span>{currentNews.title}</span>
      </nav>
      <h1>{currentNews.title}</h1>
      <p>{currentNews.date}</p>
      <img src={currentNews.img} alt={currentNews.title} className={classes.newsImage} />
      <p>{currentNews.description}</p>
    </div>
  );
}

export default OneNewsPage;
