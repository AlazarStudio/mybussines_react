import React from 'react';
import classes from './SupportPageAll.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { supports } from '../../../../../bd';

export default function SupportPageAll({ activeTab }) {
  const filteredSupportsType = supports.filter((support) => {
    if (activeTab === 'federal') {
      return support.typeId === 1; // 1 - ID для "Федеральные"
    }
    if (activeTab === 'regional') {
      return support.typeId === 2; // 2 - ID для "Региональные"
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
              <div className={classes.containerGroupContent}>
                {filteredSupportsType.map((el) =>
                <div className={classes.containerGroupContentCard} key={el.id}></div>
                )}
                </div>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}
