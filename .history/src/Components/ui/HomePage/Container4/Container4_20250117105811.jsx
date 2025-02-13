import React from 'react';
import classes from './Container4.module.css';
import { useNavigate } from 'react-router-dom';

function Container4({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
    <a href='        onClick={() => navigate('/https://www.kchr.ru/svo/')}'
      <img src="/images/bannerSVO.webp" />
    </>
  );
}

export default Container4;
