import React from 'react';
import classes from './Bid.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

export default function Bid() {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.containerBid}>
            <span>Оставить заявку</span>
            <input placeholder="ФИО*" />
            <input placeholder="Телефон*" />
            <input placeholder="E-mail*" />
            <span>Организационно-правовая форма*</span>
            <div className={classes}
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}
