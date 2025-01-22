import React from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';
import { useLocation } from 'react-router-dom';

function OneNewsPage({ children, ...props }) {
  const location = useLocation();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
        <p>{location.pathname}</p> {/* Отображение текущего пути */}
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default OneNewsPage;
