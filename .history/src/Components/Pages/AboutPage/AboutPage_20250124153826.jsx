import React from 'react';
import classes from './AboutPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import Container1 from '../../ui/AboutPage/Container1/Container1';
import Container2 from '../../ui/AboutPage/Container2/Container2';

function AboutPage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
            <Container1/>
            <Container2
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default AboutPage;
