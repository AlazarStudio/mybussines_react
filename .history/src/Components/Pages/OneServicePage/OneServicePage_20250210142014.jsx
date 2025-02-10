import React, { useEffect, useState } from 'react';
import classes from './OneServicePage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import DOMPurify from 'dompurify';
import { Link, useParams } from 'react-router-dom';
import serverConfig from '../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';

function OneServicePage() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/services`);
        const servicesData = await response.json();

        // ✅ Фильтруем услугу по заголовку
        const foundService = servicesData.find(
          (item) =>
            transliterate(item.title.replaceAll('«', '').replaceAll('»', '')) ===
            decodedTitle
        );

        setService(foundService || null);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [decodedTitle]);

  // ✅ Обработка ошибок и загрузки
  if (loading) {
    return (
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <h1>Загрузка...</h1>
          </div>
        </WidthBlock>
      </CenterBlock>
    );
  }

  if (error) {
    return (
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <h1>Ошибка загрузки услуги</h1>
            <p>{error}</p>
            <Link to="/service">Вернуться к списку услуг</Link>
          </div>
        </WidthBlock>
      </CenterBlock>
    );
  }

  if (!service) {
    return (
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <h1>Услуга не найдена</h1>
            <Link to="/service">Вернуться к списку услуг</Link>
          </div>
        </WidthBlock>
      </CenterBlock>
    );
  }

  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.container}>
          <div className={classes.containerNav}>
            <Link to="/">Главная / </Link>
            <Link to="/service">Услуги / </Link>
            <span>{service.title}</span>
          </div>

          <div className={classes.containerNews}>
            <span>{service.title}</span>
            <p
              className={classes.articleText}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(service?.description || '')
              }}
            ></p>
            {/* <img src={`${uploadsConfig}${service.img?.[0] || 'default-image.png'}`} alt={service.title} /> */}
          </div>
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}



export default OneServicePage;
