import React, { useState } from 'react';

import classes from './SupportPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import SupportPageNav from '../../ui/SupportPage/Nav/SupportPageNav';
import { supports } from '../../../../bd';

function SupportPage({ children, ...props }) {
  const [activeTab, setActiveTab] = useState(supports[0].title.toLowerCase()); // Начальное состояние: первый таб

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Устанавливаем активный таб
  };

  return (
    <>
      <div className={classes.containerTop}>
        <SupportPageNav />

        {/* Динамические изображения */}
        <img
          src={
            activeTab === 'federal'
              ? '/images/R67.png'
              : '/images/Rectangle 67.png'
          }
          className={classes.imgBack}
        />
        <img
          src={
            activeTab === 'federal'
              ? '/images/444.png'
              : '/images/Ellipse 20.png'
          }
          className={classes.img1}
        />
        <img
          src={
            activeTab === 'federal'
              ? '/images/555.png'
              : '/images/Ellipse 23.png'
          }
          className={classes.img2}
        />
        <img src="/images/Layer1.png" className={classes.img3} />
        <img
          src={
            activeTab === 'federal'
              ? '/images/444.png'
              : '/images/Ellipse 20.png'
          }
          className={classes.img4}
        />
        <img
          src={
            activeTab === 'federal'
              ? '/images/Ellipse 21.png'
              : '/images/Ellipse 20.png'
          }
          className={classes.img5}
        />

        <CenterBlock>
          <WidthBlock>
            <div className={classes.containerTopTitle}>
              <span className={classes.containerTopTitle1}>
                Меры поддержки для предпринимателей Карачаево-Черкесской
                республики
              </span>
              <div className={classes.containerTopTitleImg}>
                <img
                  src="/images/gerb_rf 1.svg"
                  style={{
                    opacity: activeTab === 'federal' ? '1' : '0.3',
                  }}
                />
                <img
                  src="/images/gerb_kchr 1.svg"
                  style={{
                    opacity: activeTab === 'federal' ? '0.3' : '1',
                  }}
                />
              </div>

              {/* Вкладки с динамическим слайдером */}
              <div className={classes.containerTopTitleSpan}>
                {supports.map((support, index) => (
                  <span
                    key={support.id}
                    className={`${classes.tab} ${
                      activeTab === support.title.toLowerCase()
                        ? classes.active
                        : ''
                    }`}
                    onClick={() => handleTabClick(support.title.toLowerCase())}
                  >
                    {support.title}
                  </span>
                ))}

                {/* Слайдер */}
                <div
                  className={classes.slider}
                  style={{
                    transform: `translateX(${
                      supports.findIndex(
                        (support) =>
                          support.title.toLowerCase() === activeTab
                      ) * 100
                    }%)`,
                    background:
                      activeTab === 'federal'
                        ? 'linear-gradient(90deg, rgb(62, 22, 95), rgb(79, 120, 197))'
                        : 'linear-gradient(90deg, rgb(208, 125, 224), rgb(91, 2, 192))',
                  }}
                />
              </div>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}

export default SupportPage;
