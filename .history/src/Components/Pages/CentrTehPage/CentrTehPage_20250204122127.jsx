import React from 'react';
import classes from './CentrPredPage.module.css';

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
