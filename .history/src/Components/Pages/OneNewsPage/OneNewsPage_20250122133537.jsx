import React from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';
import { Link, useLocation } from 'react-router-dom';

function OneNewsPage({ children, ...props }) {
  const location = useLocation();

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
          <nav>
            <Link to="/" style={{ marginRight: 5 }}>
              Главная
            </Link>
            {' / '}
            <Link to="/news" style={{ marginRight: 5 }}>
              News
            </Link>
            {routes
              .filter((route) => route.path !== '/news') // Исключаем "/news", т.к. он уже добавлен
              .map((route, index) => (
                <span key={index}>
                  {' / '}
                  <Link to={route.path} style={{ marginLeft: 5 }}>
                    {route.name}
                  </Link>
                </span>
              ))}
          </nav>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default OneNewsPage;
