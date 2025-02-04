import React from 'react';
import classes from './Container4.module.css';
import { service } from '../../../../../bd';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Container4({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            <span>Образовательные курсы</span>
          </div>
          <div className={classes.container}>
      <div className={classes.containerCard}>
        <span></span>
      </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container4;
