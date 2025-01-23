import React from 'react';
import classes from './SupportPageAll.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { supports } from '../../../../../bd';

export default function SupportPageAll() {

  const filteredSupportsType = supports.filter((support) => {
    if (activeTab === 'federal') {
      return support.typeId === 1 && support.popular === true; // 1 - ID для "Федеральные"
    }
    if (activeTab === 'regional') {
      return support.typeId === 2 && support.popular === true; // 2 - ID для "Региональные"
    }
    return false;
  });

  return (
    <>
      <div className={classes.back}>
        <CenterBlock>
          <WidthBlock>
            <div className={classes.containerGroup}>
              <input placeholder="Найти" />
              <div className={classes.containerGroupContent}>{supports}</div>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}
