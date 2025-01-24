import React from 'react';
import classes from './Container3.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Container3({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
        <div className={classes.container3}>
          <div className={classes.container3Left}>
            <img src='/images/aboutCon3L.png'/>
          </div>
          <div className={classes.container3Right}>
          <img src='/images/aboutCon3R'.p/>
          </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container3;
