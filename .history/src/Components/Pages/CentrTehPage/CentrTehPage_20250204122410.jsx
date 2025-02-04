import React from 'react';
import classes from './CentrTehPage.module.css';

import Bid from '../../ui/Bid/Bid';

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
