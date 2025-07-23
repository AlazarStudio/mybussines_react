import React, { useEffect } from 'react';
import classes from './CentrHozPage.module.css';
import Container1 from '../../ui/CentrHozPage/Container1/Container1';
import Container2 from '../../ui/CentrHozPage/Container2/Container2';
import Container3 from '../../ui/CentrHozPage/Container3/Container3';
import Container4 from '../../ui/CentrHozPage/Container4/Container4';
import Container5 from '../../ui/CentrHozPage/Container5/Container5';
import Container6 from '../../ui/CentrHozPage/Container6/Container6';
import Bid from '../../ui/Bid/Bid';
import { useLocation } from 'react-router-dom';

function CentrHozPage({ children, ...props }) {

    const location = useLocation();

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // скролл вверх при изменении маршрута
  return (
    <>
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      {/* <Container5 /> */}
      <Container6 />
      <Bid />
    </>
  );
}

export default CentrHozPage;
