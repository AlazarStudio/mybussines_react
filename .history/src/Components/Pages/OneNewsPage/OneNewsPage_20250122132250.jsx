import React from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';

function OneNewsPage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>1/WidthBlock>
      </CenterBlock>
    </>
  );
}

export default OneNewsPage;
