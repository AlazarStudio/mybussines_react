import React from 'react';
import classes from './ShowCasesPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function ShowCasesPage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock></WidthBlock>
      </CenterBlock>
    </>
  );
}

export default ShowCasesPage;
