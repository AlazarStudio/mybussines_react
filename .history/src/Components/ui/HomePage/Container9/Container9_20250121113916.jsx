/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import classes from './Container9.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container9({ children, ...props }) {

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
                        <span>{123}</span>
                      </div>
                      <div
                        className={`${classes.containerBottomLeftInfoIp}   ${classes.border}`}
                      >
                        <span>ЮЛ</span>
                        <span>{123}</span>
                      </div>
                      <div className={classes.containerBottomLeftInfoIp}>
                        <span>СМСП</span>
                        <span>{123}</span>
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
                        <span>{}</span>
                      </div>
                      <div
                        className={`${classes.containerBottomLeftInfoIp}   ${classes.border}`}
                      >
                        <span>ЮЛ</span>
                        <span>{}</span>
                      </div>
                      <div className={classes.containerBottomLeftInfoIp}>
                        <span>СМСП</span>
                        <span>{}</span>
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
                        <span>{20135}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.containerBottomRight}>
                  <
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
