import React, { useEffect, useState } from 'react';
import classes from './ServicePage.module.css';
import { service } from '../../../../bd';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import serverConfig from '../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';

function ServicePage({ children, ...props }) {
  const navigate = useNavigate();

  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/supports`);
        const servicesData = await response.json();

        // ✅ Фильтруем только

        setService(servicesData);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.input}>
            <input placeholder="Найти" />
          </div>
          <div className={classes.container}>
            {service.map((el) => (
              <div className={classes.containerCard} key={el.id}>
                <img src={`${uploadsConfig}${support.img[0]}`} className={classes.containerCardImg} />
                <img src="/images/roket.png" />
                <img src="/images/orangeSer.png" />
                <div className={classes.containerCardBottom}>
                  <span>{el.title}</span>
                  <span
                    className={classes.readMore}
                    onClick={() =>
                      navigate(
                        `/service/${el.title
                          .replaceAll(' ', '-')
                          .replaceAll('«', '')
                          .replaceAll('»', '')}`
                      )
                    }
                  >
                    <img src="/images/strelka.png" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default ServicePage;
