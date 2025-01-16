import React from 'react';
import classes from './HomePage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import Container1 from '../../ui/HomePage/Container1/Container1';

function HomePage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
            <Container1/>
            <Conta
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default HomePage;
