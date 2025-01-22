import React from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';
import { useLocation } from 'react-router-dom';

function OneNewsPage({ children, ...props }) {
  const location = useLocation();

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
          <div className={classes.container}>
            <p>{`${basePath}/${decodeURIComponent(fullPath)}`}</p>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default OneNewsPage;
