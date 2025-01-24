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
            <img src="/images/aboutCon4L.jpg" />
            <div className={classes.container4Text}>
            font-family: Montserrat;
font-size: 16px;
font-weight: 500;
line-height: 22.4px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;

            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container4;
