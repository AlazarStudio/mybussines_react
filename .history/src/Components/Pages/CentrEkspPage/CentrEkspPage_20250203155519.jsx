import React from 'react';
import classes from './CentrEkspPage.module.css';
import Container1 from '../../ui/CentrEkspPage/Container1/Container1';
import Container2 from '../../ui/CentrEkspPage/Container2/Container2';
import Container3 from '../../ui/CentrEkspPage/Container3/Container3';
import Container4 from '../../ui/CentrEkspPage/Container4/Container4';
import Bid from '../../ui/Bid/Bid';
import Container5 from '../../ui/CentrEkspPage/Container5/Container5';

function CentrEkspPage({ children, ...props }) {
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

export default CentrEkspPage;
