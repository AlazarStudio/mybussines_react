import React, { useState } from 'react';

import classes from './SupportPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import SupportPageNav from '../../ui/SupportPage/Nav/SupportPageNav';

function SupportPage({ children, ...props }) {
  const [activeTab, setActiveTab] = useState('federal'); // Начальное состояние

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Устанавливаем активный таб
  };
  return (
    <>
      <div className={classes.containerTop}>
        <SupportPageNav />
        
      </div>
    </>
  );
}

export default SupportPage;
