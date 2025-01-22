import React from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';
import { Link, useLocation } from 'react-router-dom';

function OneNewsPage({ children, ...props }) {
  const location = useLocation();

  const { title } = useParams(); // Получаем title из URL
  const formattedTitle = decodeURIComponent(title).replaceAll('-', ' '); // Форматируем title из маршрута

  // Ищем новость по заголовку
  const currentNews = news.find((item) => item.title === formattedTitle);

  if (!currentNews) {
    return <h1>Новость не найдена</h1>;
  }

  // Функция для форматирования сегментов пути
  const formatPath = (path) => {
    return path
      .replaceAll('-', ' ') // Заменяем дефисы на пробелы
      .replaceAll('%20', ' ') // Декодируем пробелы
      .replaceAll('%C2%AB', '«') // Кавычки
      .replaceAll('%C2%BB', '»'); // Кавычки
  };

  // Получаем сегменты пути, исключая первый пустой
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Построение маршрутов, начиная с News, если он есть
  const routes = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    return { name: formatPath(decodeURIComponent(segment)), path };
  });

  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <nav className={classes.containerNav}>
              {/* Ссылка на Главная */}
              <Link
                to="/"
                style={{
                  marginRight: 5,
                  textDecoration: location.pathname === '/' ? 'none' : 'none',
                }}
              >
                Главная /
              </Link>
              {/* Ссылка на News */}
              <Link
                to="/news"
                style={{
                  marginRight: 5,
                  textDecoration:
                    location.pathname === '/news' ? 'none' : 'none',
                }}
              >
                Новости /
              </Link>
              {/* Остальные маршруты */}
              {routes
                .filter((route) => route.path !== '/news') // Исключаем "/news"
                .map((route, index) => (
                  <span key={index}>
                    {location.pathname === route.path ? (
                      <span style={{ color: 'black', marginLeft: 5 }}>
                        {route.name}
                      </span> // Неактивный маршрут
                    ) : (
                      <Link to={route.path} style={{ marginLeft: 5 }}>
                        {route.name}
                      </Link> // Активный маршрут
                    )}
                  </span>
                ))}
            </nav>
            <div className={classes.containerNews} key={news.id}>
              <span>{news.title}123</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default OneNewsPage;
