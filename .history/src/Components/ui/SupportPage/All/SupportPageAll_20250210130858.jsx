import React, { useEffect, useState } from 'react';
import classes from './SupportPageAll.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { supports } from '../../../../../bd';
import serverConfig from '../../../../serverConfig';

export default function SupportPageAll({ activeTab }) {
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

  const filteredSupportsType = supports.filter((support) => {
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
  });

  return (
    <>
      <div className={classes.back}>
        <CenterBlock>
          <WidthBlock>
            <div className={classes.containerGroup}>
              <input placeholder="Найти" />
              <div className={classes.containerGroupContent}>
                {filteredSupportsType.map((support) => (
                  <div
                    className={classes.containerGroupContentCard}
                    key={support.id}
                  >
                    <img src={support.img[0].trim()} />
                    <span>{support.title}</span>
                    <span
                      style={{
                        background:
                          activeTab === 'federal'
                            ? '#3D2A92' // Градиент от синего к белому
                            : '#733897', // Градиент от розового к фиолетовому
                      }}
                    >
                      Узнать больше
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}
