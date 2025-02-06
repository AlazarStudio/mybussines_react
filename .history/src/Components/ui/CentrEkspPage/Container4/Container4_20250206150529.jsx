import React, { useEffect, useState } from 'react';
import classes from './Container4.module.css';
import { service } from '../../../../../bd';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';
import uploadsConfig from '../../../../uploadsConfig';
import serverConfig from '../../../../serverConfig';

function Container4({ children, ...props }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/services`);
        const servicesData = await response.json();

        // ✅ Фильтруем только те, где хотя бы один центр = "ЦПП"
        const filteredServices = servicesData.filter((service) =>
          service.centers?.some((center) => center.center.title === 'ЦПП')
        );

        setServices(filteredServices);
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
          <div className={classes.title}>
            Услуги Центра поддержки предпринимателей
          </div>
          <div className={classes.container}>
            {services.map((el) => (
              <div className={classes.containerCard} key={el.id}>
                <img
                  src={`${uploadsConfig}${el.img[0]}`}
                  className={classes.containerCardImg}
                />
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

export default Container4;
