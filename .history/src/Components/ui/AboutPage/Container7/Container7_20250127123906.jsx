import React from 'react';
import classes from './Container7.module.css';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container7({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container7}>
            <
      
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container7;
