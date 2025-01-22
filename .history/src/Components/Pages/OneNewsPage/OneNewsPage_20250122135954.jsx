import React from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';
import { Link } from 'react-router-dom';

function OneNewsPage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerNav}>
            <Link to="/">Главная /</Link>
            <Link to="/news">Новости /</Link>
            <span>{news.title</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default OneNewsPage;
