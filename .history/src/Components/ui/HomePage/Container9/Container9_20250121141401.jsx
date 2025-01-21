/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import classes from './Container9.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import Svg from './Svg';
import { regionInfo } from '../../../../../bd';

function Container9({ children, ...props }) {
  const totalIp = Object.entries(regionInfo)
    .filter(([key]) => key !== 'samozan')
    .reduce((sum, [region]) => {
      return sum + Number(region.ip); // Преобразуем значение ip в число и суммируем
    }, 0);

  const totalUl = Object.entries(regionInfo)
    .filter(([key]) => key !== 'samozan')
    .reduce((sum, [region]) => {return sum + Number(region.ul); // Преобразуем значение ip в число и суммируем
    }, 0);

  const totalSmsp = Object.entries(regionInfo)
    .filter(([key]) => key !== 'samozan')
    .reduce((sum, [region]) => {
      return sum + Number(region.smsp); // Преобразуем значение ip в число и суммируем
    }, 0);

  const totalIpReg = Object.entries(regionInfo)
    .filter(([key]) => key !== 'cherkessk') // Исключаем объект с ключом 'cherkessk'
    .reduce((sum, [_, region]) => sum + Number(region.ip), 0);

  const totalUlReg = Object.entries(regionInfo)
    .filter(([key]) => key !== 'cherkessk')
    .reduce((sum, [_, region]) => sum + Number(region.ul), 0);

  const totalSmspReg = Object.entries(regionInfo)
    .filter(([key]) => key !== 'cherkessk')
    .reduce((sum, [_, region]) => sum + Number(region.smsp), 0);

  return (
    <>
      <div className={classes.back}>
        <CenterBlock>
          <WidthBlock>
            <div className={classes.container}>
              <div className={classes.containerTitle}>Информция</div>
              <div className={classes.containerBottom}>
                <div className={classes.containerBottomLeft}>
                  <div className={classes.containerBottomLeftTop}>
                    <div className={classes.containerBottomLeftTitle}>
                      <img src="/images/smspob.png" />
                      <span>Общее количество СМСП</span>
                    </div>
                    <div className={classes.containerBottomLeftInfo}>
                      <div
                        className={`${classes.containerBottomLeftInfoIp}   ${classes.border}`}
                      >
                        <span>ИП</span>
                        <span>{totalIp}</span>
                      </div>
                      <div
                        className={`${classes.containerBottomLeftInfoIp}   ${classes.border}`}
                      >
                        <span>ЮЛ</span>
                        <span>{totalUl}</span>
                      </div>
                      <div className={classes.containerBottomLeftInfoIp}>
                        <span>СМСП</span>
                        <span>{totalSmsp}</span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.containerBottomLeftCenter}>
                    <div className={classes.containerBottomLeftTitle}>
                      <img src="/images/smsprai.png" />
                      <span>Общее количество СМСП в районах</span>
                    </div>
                    <div className={classes.containerBottomLeftInfo}>
                      <div
                        className={`${classes.containerBottomLeftInfoIp}   ${classes.border}`}
                      >
                        <span>ИП</span>
                        <span>{totalIpReg}</span>
                      </div>
                      <div
                        className={`${classes.containerBottomLeftInfoIp}   ${classes.border}`}
                      >
                        <span>ЮЛ</span>
                        <span>{totalUlReg}</span>
                      </div>
                      <div className={classes.containerBottomLeftInfoIp}>
                        <span>СМСП</span>
                        <span>{totalSmspReg}</span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.containerBottomLeftBottom}>
                    <div className={classes.containerBottomLeftTitle}>
                      <img src="/images/samozan.png" />
                      <span>Общее количество самозанятых</span>
                    </div>
                    <div className={classes.containerBottomLeftInfo}>
                      <div className={classes.containerBottomLeftInfoIp}>
                        <span>Самозанятые</span>
                        <span>{}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.containerBottomRight}>
                  <Svg />
                </div>
              </div>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}

export default Container9;
