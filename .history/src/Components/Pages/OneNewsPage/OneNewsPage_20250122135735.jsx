import React from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';
import { Link, useLocation, useParams } from 'react-router-dom';

function OneNewsPage({ children, ...props }) {
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
            <div className={classes.containerNews}>
              <h1>{currentNews.title}</h1>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default OneNewsPage;
