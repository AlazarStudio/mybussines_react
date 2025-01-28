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
</div>
          </WidthBlock>
        </CenterBlock>
    </>
  );
}
