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
  <span>.container3{
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: #FFFF;
  border-radius: 30px;
}

.container3 img:first-of-type{
  width: 373px;
  height: 289px;
  margin-left: 137px;
}

.container3 img:nth-of-type(2){
  width: 626px;
  height: 417px;
}</span>
</div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container4;
