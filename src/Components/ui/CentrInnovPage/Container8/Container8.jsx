import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import classes from './Container8.module.css';

import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import serverConfig from '../../../../serverConfig';
import uploadsConfig from '../../../../uploadsConfig';

const SOCIAL_ICONS = {
  telegram: '/images/tgNew.svg',
  instagram: '/images/tgNew.svg',
  whatsapp: '/images/tgNew.svg',
};

function Container8() {
  const [practices, setPractices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/socialPractices`);
        if (!response.ok) throw new Error(`Ошибка ${response.status}`);
        const data = await response.json();
        setPractices(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Ошибка загрузки практик:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            <span>Лучшие практики социального предпринимательства Карачаево-Черкесской Республики</span>
          </div>
          <div className={classes.loader}>Загрузка...</div>
        </WidthBlock>
      </CenterBlock>
    );
  }

  if (error || !practices.length) {
    return null;
  }

  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.title}>
          <span>
            Лучшие практики социального предпринимательства Карачаево-Черкесской Республики
          </span>
        </div>
        <div className={classes.wrapper}>
          <Swiper
            spaceBetween={24}
            slidesPerView={1.2}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className={classes.swiper}
          >
            {practices.map((item) => (
              <SwiperSlide key={item.id} className={classes.slide}>
                <div className={classes.card}>
                  <div className={classes.cardPhoto}>
                    {item.photo?.length && item.photo[0] ? (
                      <img
                        src={`${uploadsConfig}${item.photo[0]}`}
                        alt={item.name}
                      />
                    ) : (
                      <div className={classes.photoPlaceholder} />
                    )}
                  </div>
                  <div className={classes.cardContent}>
                    <h3 className={classes.cardName}>{item.name}</h3>
                    <p className={classes.cardRole}>{item.role}</p>
                    <p className={classes.cardDescription}>{item.description}</p>
                    <div className={classes.phoneBlock}>
                      <span className={classes.phoneIcon}>📞</span>
                      <a href={`tel:${item.phone?.replace(/\s/g, '')}`} className={classes.phone}>
                        {item.phone}
                      </a>
                    </div>
                    <div className={classes.socialBlock}>
                      {(item.socialLinks || []).map((social, idx) =>
                        social.qrImage ? (
                          <div key={idx} className={classes.socialItem}>
                            <a
                              href={social.link || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={classes.socialIcon}
                            >
                              <img
                                src={SOCIAL_ICONS[social.type] || SOCIAL_ICONS.telegram}
                                alt={social.type}
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            </a>
                            <img
                              src={`${uploadsConfig}${social.qrImage}`}
                              alt={`QR ${social.type}`}
                              className={classes.qrCode}
                            />
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className={classes.navButton}
            aria-label="Следующая"
            onClick={() => swiperRef.current?.slideNext()}
          >
            →
          </button>
          <button
            type="button"
            className={classes.navButtonPrev}
            aria-label="Предыдущая"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ←
          </button>
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default Container8;
