import React from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';
import { useLocation } from 'react-router-dom';

function OneNewsPage({ children, ...props }) {
  const location = useLocation();

  // Извлечение заголовка из маршрута
  const title = location.pathname
    .replace('/news/', '') // Убираем базовый путь
    .replaceAll('-', ' ') // Заменяем дефисы на пробелы
    .replaceAll('%20', ' ') // На случай URL-encoded пробелов
    .replaceAll('%C2%AB', '«') // Заменяем закодированные символы
    .replaceAll('%C2%BB', '»'); // Заменяем закодированные символы

  return (
    <>
      <CenterBlock>
        <WidthBlock>
        <p>{decodeURIComponent(title)}</p>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default OneNewsPage;
