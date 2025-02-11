import React, { useEffect, useState } from 'react';
import classes from './Container7.module.css';
import { service } from '../../../../../bd';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import serverConfig from '../../../../serverConfig';
import uploadsConfig from '../../../../uploadsConfig';

function Container7({ children, ...props }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/services`);
        const serviceData = await response.json();

        // ✅ Фильтруем только

        setService(serviceData);
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
            <span>Популярные услуги</span>
            <button onClick={() => navigate('/service')}>Смотреть все</button>
          </div>
          <div className={classes.container}>
            {service.map((el) => (
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
                    {/* <img src="/images/Group15.svg" /> */}
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

export default Container7;
