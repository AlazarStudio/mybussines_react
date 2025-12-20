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
        <div className={classes.containerBlock}>
          <a href="https://www.kchr.ru/svo/" target='_blank' className={classes.one}>
            {' '}
            <img src="/images/bannerSVO.webp" />
          </a>
          <a
            href="https://www.cci.by/uslugi/marketingovaya-i-informatsionnaya-podderzhka/biznes-informatsiya/"
            target='_blank'
            className={classes.two}
          >
            {' '}
            <img src="/images/banner_tpp2.webp" />
          </a>
        </div>

        <div className={classes.container2}>
          <div className={classes.containerPdf}>
            <span>Каталог производителей Карачаево-Черкесской Республики</span>
            <div className={classes.containerPdfBottom}>
              <span>Посмотреть / Скачать</span>
              <div className={classes.buttons}>
                <button onClick={handleOpenRu} className={classes.downloadBtn}>
                  РУС
                </button>
                <button onClick={handleOpenEng} className={classes.downloadBtn}>
                  ENG
                </button>
              </div>
            </div>
          </div>
          <div className={classes.container3}>
            <a href="https://vk.com/wall-184048555_22481" target='_blank'>
              <img src="../images/banner22.jpg" />
            </a>

            <a href="https://креативныйкод.рф/ " target='_blank'>
              <img src="../images/creativ1.jpg" />
            </a>

            <a href="https://бизнесмарафон.рф/ " target='_blank'>
              <img src="../images/creativ111.jpg" />
            </a>
          </div>
          <a href="https://xn--80aaapecta3abbflycnd5byo.xn--p1ai/?utm_source=kchr&utm_medium=web&utm_campaign=regions" target='_blank'>
            <img src="../images/banner3.jpg" className={classes.banner3} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Container4;
