import React from 'react';
import classes from './Container4.module.css';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container4({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
<div className={classes.container4}>
  <img src='/images/aboutCon4L'/>
  <div className={classes.container4Text</div>}
  <span></span>
</div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container4;
