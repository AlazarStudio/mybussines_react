import React from 'react';
import classes from './CentrPredPage.module.css';

import Bid from '../../ui/Bid/Bid';
import Container1 from '../../ui/CentrTehPage/Container1/Container1';
import Container2 from '../../ui/CentrInnovPage/Container2/Container2';

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
