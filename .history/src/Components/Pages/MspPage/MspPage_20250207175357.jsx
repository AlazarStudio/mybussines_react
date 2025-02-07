import React from 'react';
import classes from './MspPage.module.css';
import MspPageNav from '../../ui/MspPage/Nav/MspPageNav';
import Container1 from '../../ui/MspPage/Container1/Container1';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import Container2 from '../../ui/MspPage/Container2/Container2';

function MspPage({ children, ...props }) {
  return (
    <>
      <div className={classes.color}>
        <MspPageNav />
        <CenterBlock>
          <WidthBlock>
            <Container1 />
            <Container2 />
            <
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}

export default MspPage;
