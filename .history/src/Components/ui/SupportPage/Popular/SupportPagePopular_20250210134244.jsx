import React, { useEffect, useState } from 'react';
import classes from './SupportPagePopular.module.css';
// import { supports } from '../../../../../bd';
import serverConfig from '../../../../serverConfig';
import uploadsConfig from '../../../../uploadsConfig';

function SupportPagePopular({ activeTab }) {
  // Локальное состояние для ховеров
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [supports, setSupports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/supports`);
        const supportsData = await response.json();

        // ✅ Фильтруем только

        setSupports(supportsData);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredSupports = supports
    .filter((support) => {
      if (activeTab === 'federal') {
        return (
          support.typeSupport.title === 'Федеральная мера поддержки' &&
          support.popular === true
        ); // 1 - ID для "Федеральные"
      }
      if (activeTab === 'regional') {
        return (
          support.typeSupport.title === 'Региональная мера поддержки' &&
          support.popular === true
        ); // 2 - ID для "Региональные"
      }
      return false;
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Сортируем по дате
    .slice(0, 3); // Берём только 3 последних

  return (
    <div className={classes.containerPopular}>
      <div className={classes.containerPopularTitle}>
        {activeTab === 'federal'
          ? 'Самые популярные федеральные меры поддержки'
          : 'Самые популярные региональные меры поддержки'}
      </div>
      <div className={classes.containerPopularContent}>
        {filteredSupports.map((support, index) => (
          <div key={support.id} className={classes.containerPopularContentCard}>
            <div className={classes.containerPopularContentCardTop}>
              <span
                style={{
                  background:
                    activeTab === 'federal'
                      ? '#8692C3' // Градиент от синего к белому
                      : '#C88DC5', // Градиент от розового к фиолетовому
                }}
              >
                Популярно
              </span>
              <img src={`${uploadsConfig}${img}`} />
            </div>
            <div className={classes.containerPopularContentCardBottom}>
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
                  stroke={hoveredIndex === index ? '#F15043' : '#8692C3'}
                  strokeWidth="2"
                />
                <path
                  d="M45.7071 32.7071C46.0976 32.3166 46.0976 31.6834 45.7071 31.2929L39.3431 24.9289C38.9526 24.5384 38.3195 24.5384 37.9289 24.9289C37.5384 25.3195 37.5384 25.9526 37.9289 26.3431L43.5858 32L37.9289 37.6569C37.5384 38.0474 37.5384 38.6805 37.9289 39.0711C38.3195 39.4616 38.9526 39.4616 39.3431 39.0711L45.7071 32.7071ZM20 33L45 33L45 31L20 31L20 33Z"
                  fill={hoveredIndex === index ? '#F15043' : '#8692C3'}
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportPagePopular;
