import React, { useState } from 'react';
import classes from './SupportPageAll.module.css';
import { supports } from '../../../../../bd';

function SupportPageAll({ activeTab }) {
  const filteredSupports = supports.filter((support) => {
    if (activeTab === 'federal') {
      return support.typeId === 1 && support.popular === true; // 1 - ID для "Федеральные"
    }
    if (activeTab === 'regional') {
      return support.typeId === 2 && support.popular === true; // 2 - ID для "Региональные"
    }
    return false;
  });

  // Локальное состояние для ховеров
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
123
  );
}

export default SupportPageAll;
