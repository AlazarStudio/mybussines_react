import React from 'react';
import classes from './Container6.module.css';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container6({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container6}>
            <span>Инфраструктура Центра «Мой бизнес КЧР»</span>

          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container6;
