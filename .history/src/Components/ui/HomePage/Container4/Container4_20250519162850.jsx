import React from 'react';
import classes from './Container4.module.css';
import { useNavigate } from 'react-router-dom';

function Container4({ children, ...props }) {
  const navigate = useNavigate();

  const handleDownloadRu = () => {
    const link = document.createElement('a');
    link.href = '/katalog_proizvedeno_v_kchr_RU.pdf'; // путь к PDF в папке public
    link.download = 'katalog_proizvedeno_v_kchr_RU.pdf';
    link.click();
  };

  const handleDownloadEng = () => {
    const link = document.createElement('a');
    link.href = '/katalog_proizvedeno_v_kchr_ENG.pdf'; // путь к PDF в папке public
    link.download = 'katalog_proizvedeno_v_kchr_ENG.pdf';
    link.click();
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
          <span>Посмотреть / Скачать</span>
          <div className={classes.buttons}>
            <button onClick={handleDownload} className={classes.downloadBtn}>
              Скачать презентацию PDF
            </button>
            <button onClick={handleDownload} className={classes.downloadBtn}>
              Скачать презентацию PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container4;
