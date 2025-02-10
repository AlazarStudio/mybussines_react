import React from 'react';
import classes from './MspPage.module.css';
import MspPageNav from '../../ui/MspPage/Nav/MspPageNav';
import Container1 from '../../ui/MspPage/Container1/Container1';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import Container2 from '../../ui/MspPage/Container2/Container2';
import Container3 from '../../ui/MspPage/Container3/Container3';
import Container4 from '../../ui/MspPage/Container4/Container4';
import Container5 from '../../ui/MspPage/Container5/Container5';

function MspPage({ children, ...props }) {
  return (
    <>
      <div className={classes.color}>
        <MspPageNav />
        <CenterBlock>
          <WidthBlock>
            <Container1 />
            <Container2 />
            <Container3 />
            <Container4 />
            <Container5 />
            <Cont
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}

export default MspPage;
