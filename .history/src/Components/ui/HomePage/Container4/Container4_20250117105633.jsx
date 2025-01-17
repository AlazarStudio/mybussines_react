import React from 'react';
import classes from './Container4.module.css';
import { useNavigate } from 'react-router-dom';

function Container4({ children, ...props }) {
    const navigate - useNavigate
  return (
    <>
      <img
        src="/images/bannerSVO.webp"
        onClick={() => navigate('/predprinimatel')}
      />
    </>
  );
}

export default Container4;
