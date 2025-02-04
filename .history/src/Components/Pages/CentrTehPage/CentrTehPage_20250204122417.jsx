import React from 'react';
import classes from './CentrTehPage.module.css';

import Bid from '../../ui/Bid/Bid';
import Container1 from '../../ui/CentrTehPage/Container1/Container1';
import Container2 from '../../ui/CentrTehPage/Container2/Container2';

function CentrTehPage({ children, ...props }) {
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

export default CentrTehPage;
