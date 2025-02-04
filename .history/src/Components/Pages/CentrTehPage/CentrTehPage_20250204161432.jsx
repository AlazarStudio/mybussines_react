import React from 'react';
import classes from './CentrTehPage.module.css';

import Bid from '../../ui/Bid/Bid';
import Container1 from '../../ui/CentrTehPage/Container1/Container1';
import Container2 from '../../ui/CentrTehPage/Container2/Container2';
import Container3 from '../../ui/CentrTehPage/Container3/Container3';
import Container4 from '../../ui/CentrTehPage/Container4/Container4';
import Container6 from '../../ui/CentrTehPage/Container6/Container6';

function CentrTehPage({ children, ...props }) {
  return (
    <>
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container6 />
      <Bid />
    </>
  );
}

export default CentrTehPage;
