import React from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';

function OneNewsPage({ children, ...props }) {
  const location = useLocation();
  return (
    <>
      <CenterBlock>
        <WidthBlock></WidthBlock>
      </CenterBlock>
    </>
  );
}

export default OneNewsPage;
