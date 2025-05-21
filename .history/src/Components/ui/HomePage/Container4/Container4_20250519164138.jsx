import React from 'react';
import classes from './Container4.module.css';
import { useNavigate } from 'react-router-dom';

function Container4({ children, ...props }) {
  const navigate = useNavigate();

  const handleOpenRu = () => {
    window.open('/katalog_proizvedeno_v_kchr_RU.pdf', '_blank');
  };

  const handleOpenEng = () => {
    window.open('/katalog_proizvedeno_v_kchr_ENG.pdf', '_blank');
  };

  return (
    <>
      <div className={classes.container}>
        <a href="https://www.kchr.ru/svo/" className={classes.one}>
          {' '}
          <img src="/images/bannerSVO.webp" />
        </a>
        <a
          href="https://www.cci.by/uslugi/marketingovaya-i-informatsionnaya-podderzhka/biznes-informatsiya/"
          className={classes.two}
        >
          {' '}
          <img src="/images/banner_tpp2.webp" />
        </a>
      </div>
      <div className={classes.container2}>
        <div className={classes.containerPdf}>
          <span>Каталог производителей Карачаево-Черкесской Республики</span>

          <div className={classes.buttons}>
            <span>Посмотреть / Скачать</span>
            <>
            <button onClick={handleOpenRu} className={classes.downloadBtn}>
              РУС
            </button>
            <button onClick={handleOpenEng} className={classes.downloadBtn}>
              ENG
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container4;
