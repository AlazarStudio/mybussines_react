import React, { useState } from 'react';

import classes from './SupportPagePopular.module.css';

import { supports } from '../../../../../bd';

function SupportPagePopular({ activeTab }) {
  const filteredSupports = supports.filter((support) => {
    if (activeTab === 'federal') {
      return support.typeId === 1 && support.popular === true; // 1 - ID для "Федеральные"
    }
    if (activeTab === 'regional') {
      return support.typeId === 2 && support.popular === true; // 2 - ID для "Региональные"
    }
    return false;
  });
  return (
    <>
      <div className={classes.containerPopular}>
        <span>
          {activeTab === 'federal'
            ? 'Федеральные меры поддержки'
            : 'Региональные меры поддержки'}
        </span>

        {filteredSupports.map((support) => (
          <div key={support.title} className={classes.containerPopularCard}>
            <div className={classes.containerPopularCardTop}>
              <span>Популярно</span>
              <span>{support.img}</span>
            </div>
            <
          </div>
        ))}
      </div>
    </>
  );
}

export default SupportPagePopular;
