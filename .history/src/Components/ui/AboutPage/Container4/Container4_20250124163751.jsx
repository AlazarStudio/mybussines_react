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

        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container4;
