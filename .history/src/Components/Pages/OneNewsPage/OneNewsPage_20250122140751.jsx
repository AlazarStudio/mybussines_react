import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { news } from '../../../../bd';

function OneNewsPage() {
  const { title } = useParams();

  // Форматирование заголовка
  const formattedTitle = decodeURIComponent(title).replaceAll('-', ' ');

  // Поиск новости
  const currentNews = news.find((item) => item.title === formattedTitle);

  if (!currentNews) {
    return (
      <div>
        <h1>Новость не найдена</h1>
        <Link to="/news">Вернуться к списку новостей</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/">Главная</Link> / <Link to="/news">Новости</Link> /{' '}
      <span>{currentNews.title}</span>
      <h1>{currentNews.title}</h1>
      <p>{currentNews.date}</p>
      <img src={currentNews.img} alt={currentNews.title} style={{ maxWidth: '100%' }} />
      <p>{currentNews.description}</p>
    </div>
  );
}

export default OneNewsPage;
