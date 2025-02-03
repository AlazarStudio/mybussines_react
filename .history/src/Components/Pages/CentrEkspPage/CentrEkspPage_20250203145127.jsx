import React from 'react';
import classes from './CentrEkspPage.module.css';
import Container1 from '../../ui/CentrEkspPage/Container1/Container1';
import Container2 from '../../ui/CentrEkspPage/Container2/Container2';

function CentrEkspPage({ children, ...props }) {
  return (
    <>
      <Container1 />
      <Container2 />
    </>
  );
}

export default CentrEkspPage;
