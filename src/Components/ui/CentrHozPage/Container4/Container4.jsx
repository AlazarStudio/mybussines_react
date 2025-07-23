import React, { useEffect, useState } from 'react';
import classes from './Container4.module.css';

import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';
import serverConfig from '../../../../serverConfig';
import uploadsConfig from '../../../../uploadsConfig';

export function slugify(title) {
  const map = {
    А: 'A',
    Б: 'B',
    В: 'V',
    Г: 'G',
    Д: 'D',
    Е: 'E',
    Ё: 'E',
    Ж: 'Zh',
    З: 'Z',
    И: 'I',
    Й: 'Y',
    К: 'K',
    Л: 'L',
    М: 'M',
    Н: 'N',
    О: 'O',
    П: 'P',
    Р: 'R',
    С: 'S',
    Т: 'T',
    У: 'U',
    Ф: 'F',
    Х: 'Kh',
    Ц: 'Ts',
    Ч: 'Ch',
    Ш: 'Sh',
    Щ: 'Shch',
    Ъ: '',
    Ы: 'Y',
    Ь: '',
    Э: 'E',
    Ю: 'Yu',
    Я: 'Ya',
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'y',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'kh',
    ц: 'ts',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ъ: '',
    ы: 'y',
    ь: '',
    э: 'e',
    ю: 'yu',
    я: 'ya',
    ' ': '-',
    ',': '',
    '%': '', // <- удаляем запятые и проценты из slug
  };

  return title
    .replaceAll('«', '')
    .replaceAll('»', '')
    .replace(/\s+/g, ' ')
    .trim()
    .split('')
    .map((char) => map[char] || char)
    .join('');
}

function Container4({ children, ...props }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/services`);
        const servicesData = await response.json();

        // ✅ Фильтруем только те, где хотя бы один центр = "ЦПП"
        const filteredServices = servicesData.filter((service) =>
          service.centers?.some((center) => center.center.title === 'ЦК')
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

  // const handlePageClick = (data) => {
  //   setCurrentPage(data.selected);
  // };
  // console.log(123, news);
  // const offset = currentPage * itemsPerPage;
  // const currentNews = news.slice(offset, offset + itemsPerPage);

  // const handleNewsClick = (id) => {
  //   navigate(`/news/${id}`); // Перенаправляем на страницу с деталями новости
  // };
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            <span> Услуги Центра компетенций</span>
          </div>
          <div className={classes.container}>
            {services.map((el) => (
              <div
                className={classes.containerCard}
                onMouseEnter={() => setHovered(el.id)}
                onMouseLeave={() => setHovered(null)}
                key={el.id}
              >
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
                        `/service/${encodeURIComponent(slugify(el.title))}`
                      )
                    }
                  >
                    <img
                      src={
                        hovered === el.id
                          ? '/images/Group16.svg'
                          : '/images/Group 15.svg'
                      }
                      alt="Подробнее"
                    />
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
