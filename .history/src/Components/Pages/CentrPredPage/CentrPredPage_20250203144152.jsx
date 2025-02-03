import React from 'react';
import classes from './CentrPredPage.module.css';
import Container1 from '../../ui/CentrPredPage/Container1/Container1';
import Container2 from '../../ui/CentrPredPage/Container2/Container2';
import Container3 from '../../ui/CentrPredPage/Container3/Container3';
import Container4 from '../../ui/CentrPredPage/Container4/Container4';
import Bid from '../../ui/Bid/Bid';

function CentrPredPage({ children, ...props }) {
  return (
    <>
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Bid/>
    </>
  );
}

export default CentrPredPage;
