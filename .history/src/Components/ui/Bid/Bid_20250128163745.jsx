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
            <span className={classes.containerBidTitle}>Оставить заявку</span>
            <div className={classes.containerBidInput}>
            <input placeholder="ФИО*" />
            <input placeholder="Телефон*" />
            <input placeholder="E-mail*" />
            </div>
            <span>Организационно-правовая форма*</span>
            <div className={classes.containerBidOrg}>
              <span
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}
