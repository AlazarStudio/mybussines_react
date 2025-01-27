import React from 'react';
import classes from './Container4.module.css';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function container5({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container5container5}>
         
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default container5;
