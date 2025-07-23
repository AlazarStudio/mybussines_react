import React, { useEffect } from 'react';
import classes from './AboutPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import Container1 from '../../ui/AboutPage/Container1/Container1';
import Container2 from '../../ui/AboutPage/Container2/Container2';
import Container3 from '../../ui/AboutPage/Container3/Container3';
import Container4 from '../../ui/AboutPage/Container4/Container4';
import Container5 from '../../ui/AboutPage/Container5/Container5';
import Container6 from '../../ui/AboutPage/Container6/Container6';
import Container7 from '../../ui/AboutPage/Container7/Container7';
import { useLocation } from 'react-router-dom';

function AboutPage({ children, ...props }) {

    const location = useLocation();

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // скролл вверх при изменении маршрута
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <Container1 />
          <Container2 />
          <Container3 />
          <Container4 />
          <Container5 />
          <Container6 />
          <Container7 />
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default AboutPage;
