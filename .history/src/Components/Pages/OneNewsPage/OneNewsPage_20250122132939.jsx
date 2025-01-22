import React from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';
import { useLocation } from 'react-router-dom';

function OneNewsPage({ children, ...props }) {
  const location = useLocation();

  // Извлечение пути и корректировка отображения
  const basePath = 'Главная ';
  const fullPath = location.pathname
    .replace('/news/', ' /') // Убираем лишний слэш
    .replaceAll('-', ' ') // Заменяем дефисы на пробелы
    .replaceAll('%20', ' ') // Раскодируем пробелы
    .replaceAll('%C2%AB', '«') // Заменяем кавычки
    .replaceAll('%C2%BB', '»'); // Заменяем кавычки

  return (
    <>
      <CenterBlock>
        <WidthBlock>
        <p>{`${basePath}/${decodeURIComponent(fullPath)}`}</p>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default OneNewsPage;
