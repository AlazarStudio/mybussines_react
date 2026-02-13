import React, { useEffect } from 'react';
import classes from './CentrInnovPage.module.css';
import Container1 from '../../ui/CentrInnovPage/Container1/Container1';
import Container2 from '../../ui/CentrInnovPage/Container2/Container2';
import Container3 from '../../ui/CentrInnovPage/Container3/Container3';
import Container4 from '../../ui/CentrInnovPage/Container4/Container4';
import Container5 from '../../ui/CentrInnovPage/Container5/Container5';
import Container6 from '../../ui/CentrInnovPage/Container6/Container6';
import Bid from '../../ui/Bid/Bid';
import Container7 from '../../ui/CentrInnovPage/Container7/Container7';
import Container8 from '../../ui/CentrInnovPage/Container8/Container8';
import { useLocation } from 'react-router-dom';

function CentrInnovPage({ children, ...props }) {

  const location = useLocation();

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // скролл вверх при изменении маршрута
  return (
    <>
      <Container1 />
      {/* <Container2 /> */}
      {/* <Container3 /> */}
      <Container4 />
      <Container8 />
      <Container5 />
      <Container7 />
      <Container6 />

      <Bid />
    </>
  );
}

export default CentrInnovPage;
