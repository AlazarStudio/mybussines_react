import React from 'react';
import classes from './HomePage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import Container1 from '../../ui/HomePage/Container1/Container1';
import Container2 from '../../ui/HomePage/Container2/Container2';
import Container3 from '../../ui/HomePage/Container3/Container3';

function HomePage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
            <Container1/>
            <Container2/>
            <Container3/>
            <Container
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default HomePage;
