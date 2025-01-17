import React from 'react';
import classes from './Container4.module.css';
import { useNavigate } from 'react-router-dom';

function Container4({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <a href="https://www.kchr.ru/svo/" classNam>
        {' '}
        <img src="/images/bannerSVO.webp" />
      </a>
    </>
  );
}

export default Container4;
