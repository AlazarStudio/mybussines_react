import React from 'react';
import classes from './MspPage.module.css';
import MspPageNav from '../../ui/MspPage/Nav/MspPageNav';
import Container1 from '../../ui/MspPage/Container1/Container1';

function MspPage({ children, ...props }) {
  return (
    <>
      <div className={classes.color}>
        <MspPageNav />
<
        <Container1 />
      </div>
    </>
  );
}

export default MspPage;
