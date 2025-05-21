import React from 'react';
import classes from './Container4.module.css';
import { useNavigate } from 'react-router-dom';

function Container4({ children, ...props }) {
  const navigate = useNavigate();

   const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/your-file.pdf'; // путь к PDF в папке public
    link.download = 'alazar-studio-presentation.pdf';
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
      <div className={classes.containerPdf}
    </>
  );
}

export default Container4;
