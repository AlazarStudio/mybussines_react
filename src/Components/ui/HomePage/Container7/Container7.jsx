import React, { useEffect, useState } from 'react';
import classes from './Container7.module.css';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
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

function Container7() {
  const navigate = useNavigate();
  const [servicesList, setServicesList] = useState([]); // Переименовал, чтобы избежать конфликта с import service
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(null); // Состояние для hover

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/services`);
        if (!response.ok) throw new Error(`Ошибка ${response.status}`);

        const serviceData = await response.json();

        // Если есть поле `date`, сортируем по убыванию и берём последние 6
        const EXCLUDED_IDS = new Set([
          '53',
          '54',
          '55',
          '56',
          '57',
          '58',
          '59',
          '60',
          '61',
          '62',
          '63',
          '64',
        ]);
        const getId = (x) => String(x?.id ?? x?._id ?? '');

        const filtered = serviceData.filter(
          (el) => !EXCLUDED_IDS.has(getId(el))
        );
        const sorted = filtered
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);

        setServicesList(sorted);
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
            <span>Услуги</span>
            {/* <span>Популярные услуги</span> */}
            <button onClick={() => navigate('/service')}>Смотреть все</button>
          </div>

          {loading && <p>Загрузка...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className={classes.container}>
            {servicesList.map((el) => (
              <div
                className={classes.containerCard}
                onMouseEnter={() => setHovered(el.id)}
                onMouseLeave={() => setHovered(null)}
                key={el.id}
              >
                <img
                  src={`${uploadsConfig}${el.img[0]}`}
                  className={classes.containerCardImg}
                  alt="Service"
                />
                <img src="/images/roket.png" alt="Rocket" />
                <img src="/images/orangeSer.png" alt="Orange Background" />

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

export default Container7;
