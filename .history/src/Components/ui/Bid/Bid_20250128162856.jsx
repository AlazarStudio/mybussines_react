import React from 'react';
import classes from './SupportPageAll.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { supports } from '../../../../../bd';

export default function SupportPageAll() {
  return (
    <>
  
        <CenterBlock>
          <WidthBlock>
            <div className={classes.containerGroup}>
              <input placeholder="Найти" />
              <div className={classes.containerGroupContent}>
                {filteredSupportsType.map((support) => (
                  <div
                    className={classes.containerGroupContentCard}
                    key={support.id}
                  >
                    <img src={support.img[0].trim()} />
                    <span>{support.title}</span>
                    <span
                      style={{
                        background:
                          activeTab === 'federal'
                            ? '#3D2A92' // Градиент от синего к белому
                            : '#733897', // Градиент от розового к фиолетовому
                      }}
                    >
                      Узнать больше
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </WidthBlock>
        </CenterBlock>
    </>
  );
}
