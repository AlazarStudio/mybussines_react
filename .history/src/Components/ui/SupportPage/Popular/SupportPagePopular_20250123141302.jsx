import React, { useState } from 'react';
import classes from './SupportPagePopular.module.css';
import { supports } from '../../../../../bd';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';


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

  // Локальное состояние для ховеров
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (

        <div className={classes.containerPopular}>
          <span>
            {activeTab === 'federal'
              ? 'Федеральные меры поддержки'
              : 'Региональные меры поддержки'}
          </span>

          {filteredSupports.map((support, index) => (
            <div key={support.title} className={classes.containerPopularCard}>
              <div className={classes.containerPopularCardTop}>
                <span>Популярно</span>
                <span>{support.img}</span>
              </div>
              <div className={classes.containerPopularCardBottom}>
                <span>{support.title}</span>
                <svg
                  width="66"
                  height="64"
                  viewBox="0 0 66 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <path
                    d="M65 32C65 49.092 50.7023 63 33 63C15.2977 63 1 49.092 1 32C1 14.908 15.2977 1 33 1C50.7023 1 65 14.908 65 32Z"
                    stroke={hoveredIndex === index ? 'orange' : '#8692C3'}
                    strokeWidth="2"
                  />
                  <path
                    d="M45.7071 32.7071C46.0976 32.3166 46.0976 31.6834 45.7071 31.2929L39.3431 24.9289C38.9526 24.5384 38.3195 24.5384 37.9289 24.9289C37.5384 25.3195 37.5384 25.9526 37.9289 26.3431L43.5858 32L37.9289 37.6569C37.5384 38.0474 37.5384 38.6805 37.9289 39.0711C38.3195 39.4616 38.9526 39.4616 39.3431 39.0711L45.7071 32.7071ZM20 33L45 33L45 31L20 31L20 33Z"
                    fill={hoveredIndex === index ? 'orange' : '#8692C3'}
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default SupportPagePopular;
