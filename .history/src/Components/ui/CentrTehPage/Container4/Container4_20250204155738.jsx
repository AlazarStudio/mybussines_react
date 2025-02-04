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
            <span> Услуги Центра инноваций социальной сферы</span>
          </div>
          <div className={classes.container}>
      
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container4;
