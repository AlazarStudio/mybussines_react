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
          <div className={classes.title}>Меры поддержки</div>
          <div className={classes.container}>
            <div
              className={classes.containerEl}
              onClick={() => navigate('/')}
            >
<button className={classes.para}>123</button>

            </div>
            <div
              className={classes.containerEl}
              onClick={() => navigate('/')}
            ></div>
            <div
              className={classes.containerEl}
              onClick={() => navigate('/')}
            ></div>
            <div
              className={classes.containerEl}
              onClick={() => navigate('/')}
            ></div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container3;
