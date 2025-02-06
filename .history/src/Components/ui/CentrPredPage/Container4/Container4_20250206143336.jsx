import React, { useEffect, useState } from 'react';
import classes from './Container4.module.css';

import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Container4({ children, ...props }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Загрузка товаров
        // const categoriesResponse = await fetch(`${serverConfig}/categories`);
        // const categoriesData = await categoriesResponse.json();
        // console.log('Loaded categories:', categoriesData); // Логируем полученные данные
        // setCategories(categoriesData);

        // Загрузка других данных, если необходимо
        // const busSolutionsResponse = await fetch('https://your-api-endpoint.com/solutions');
        // const busSolutionsData = await busSolutionsResponse.json();
        // setBusSolutions(busSolutionsData);

        const newsResponse = await fetch(`${serverConfig}/news`);
        const newsData = await newsResponse.json();
        setNews(newsData);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  console.log(123, news);
  const offset = currentPage * itemsPerPage;
  const currentNews = news.slice(offset, offset + itemsPerPage);

  const handleNewsClick = (id) => {
    navigate(`/news/${id}`); // Перенаправляем на страницу с деталями новости
  };

  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            Услуги Центра поддержки предпринимателей
          </div>
          <div className={classes.container}>
            {service.map((el) => (
              <div className={classes.containerCard} key={el.id}>
                <img src={el.img} className={classes.containerCardImg} />
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
