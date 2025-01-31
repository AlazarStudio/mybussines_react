import React from 'react';
import classes from './BasePage.module.css';

function BasePage({ children, ...props }) {
  return <>
  <input placeholder='Искать в базе знаний'/>
  </>;
}

export default BasePage;
