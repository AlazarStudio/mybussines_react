import React from 'react';
import classes from './AboutPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import Container1 from '../../ui/AboutPage/Container1/Container1';
import Container2 from '../../ui/AboutPage/Container2/Container2';
import Container3 from '../../ui/AboutPage/Container3/Container3';
import Container4 from '../../ui/AboutPage/Container4/Container4';
import Container5 from '../../ui/AboutPage/Container5/Container5';

function AboutPage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <Container1 />
          <Container2 />
          <Container3 />
          <Container4 />
          <Container5 />
          <Conta
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default AboutPage;
