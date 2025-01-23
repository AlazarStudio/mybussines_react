import React, { useState } from 'react';

import classes from './SupportPagePopular.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import SupportPageNav from '../../ui/SupportPage/Nav/SupportPageNav';
import { supports } from '../../../../bd';

function SupportPagePopular({ children, ...props }) {
  const [activeTab, setActiveTab] = useState('federal'); // Начальное состояние

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Устанавливаем активный таб
  };
  return <>
  </>;
}

export default SupportPagePopular;
