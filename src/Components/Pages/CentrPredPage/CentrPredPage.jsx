import React, { useEffect } from 'react';
import classes from './CentrPredPage.module.css';
import Container1 from '../../ui/CentrPredPage/Container1/Container1';
import Container2 from '../../ui/CentrPredPage/Container2/Container2';
import Container3 from '../../ui/CentrPredPage/Container3/Container3';
import Container4 from '../../ui/CentrPredPage/Container4/Container4';
import Bid from '../../ui/Bid/Bid';
import Container5 from '../../ui/CentrPredPage/Container5/Container5';
import { useLocation } from 'react-router-dom';

function CentrPredPage({ children, ...props }) {

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
      <Container5 />
      <Bid />
    </>
  );
}

export default CentrPredPage;
