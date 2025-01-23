import React, { useState } from 'react';

import classes from './SupportPagePopular.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import SupportPageNav from '../../ui/SupportPage/Nav/SupportPageNav';
import { supports } from '../../../../bd';

function SupportPagePopular({ children, ...props, activeTab }) {
  const filteredSupports = supports.filter((support) => {
    if (activeTab === 'federal') {
      return support.typeId === 1; // 1 - ID для "Федеральные"
    }
    if (activeTab === 'regional') {
      return support.typeId === 2; // 2 - ID для "Региональные"
    }
    return false;
  });
  return (
    <>
<div>
      <h2>{activeTab === 'federal' ? 'Федеральные меры поддержки' : 'Региональные меры поддержки'}</h2>
      <ul>
        {filteredSupports.map((support) => (
          <li key={support.title}>
            <h3>{support.title}</h3>
            <p>{support.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default SupportPagePopular;
