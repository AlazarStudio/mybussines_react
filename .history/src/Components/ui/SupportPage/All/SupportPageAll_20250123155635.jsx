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
                {filteredSupportsType.map((support) =>
                <div className={classes.containerGroupContentCard} key={support.id}>
                 <img
                src={support.img[0].trim()}
              />
              <span>{support.title}</span>
              <span style={{
                    transform:
                    background:
                      activeTab === 'federal'
                        ? 'linear-gradient(90deg, rgb(62, 22, 95) ,rgb(79, 120, 197))' // Градиент от синего к белому
                        : 'linear-gradient(90deg, rgb(208, 125, 224) ,rgb(91, 2, 192))', // Градиент от розового к фиолетовому
                  }}>Узнать больше</span>
                </div>
                )}
                </div>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}
