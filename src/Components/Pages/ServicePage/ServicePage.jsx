import React, { useEffect, useRef, useState } from 'react';
import classes from './ServicePage.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import serverConfig from '../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';

const ITEMS_PER_PAGE = 12;

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

function ServicePage({ children, ...props }) {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // скролл вверх при изменении маршрута

  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // 🔍 Введённый текст
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(''); // 🔄 Дебаунс строка
  const [hovered, setHovered] = useState(null); // Состояние для hover
  const [currentPage, setCurrentPage] = useState(1);
  const cardsRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/services`);
        const servicesData = await response.json();
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

  // ⏳ Дебаунс-функция: обновляет `debouncedSearchQuery` через 500 мс после ввода
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
      setCurrentPage(1);
    }, 500); // ⏳ Задержка в 500 мс

    return () => clearTimeout(handler); // 🚀 Очистка таймера при новом вводе
  }, [searchQuery]);

  // 🔍 Фильтрация списка сервисов по `debouncedSearchQuery`
  const filteredServices = service.filter((el) =>
    el.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredServices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  function getPaginationRange(current, total) {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - delta && i <= current + delta)
      ) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l > 2) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  }

  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div ref={cardsRef} className={classes.input}>
            {/* 🔍 Поле ввода с дебаунсом */}
            <input
              type="text"
              placeholder="Найти..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={classes.searchInput} // Можно стилизовать
            />
            {filteredServices.length > 0 && (
              <span className={classes.searchCount}>
                Найдено: {filteredServices.length}
              </span>
            )}
            {filteredServices.length === 0 && (
              <span className={classes.searchCount}>Ничего не найдено</span>
            )}
          </div>
          <div  className={classes.container}>
            {filteredServices.length > 0 ? (
              <>
                {paginatedNews.map((el) => (
                  <div
                    className={classes.containerCard}
                    onMouseEnter={() => setHovered(el.id)}
                    onMouseLeave={() => setHovered(null)}
                    key={el.id}
                  >
                    <img
                      src={`${uploadsConfig}${el.img[0]}`}
                      className={classes.containerCardImg}
                      alt={el.title}
                    />
                    <img src="/images/roket.png" alt="Ракета" />
                    <img src="/images/orangeSer.png" alt="Оранжевый сервис" />
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

                {/* ✅ Пагинация — отдельно от map */}
                {totalPages > 1 && (
                  <div className={classes.pagination}>
                    <button
                      className={classes.pageButton}
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                      disabled={currentPage === 1}
                    >
                      &lt;
                    </button>
                    {getPaginationRange(currentPage, totalPages).map(
                      (page, index) =>
                        page === '...' ? (
                          <span
                            key={`ellipsis-${index}`}
                            className={classes.ellipsis}
                          >
                            ...
                          </span>
                        ) : (
                          <button
                            key={`page-${page}`}
                            className={`${classes.pageButton} ${
                              currentPage === page ? classes.active : ''
                            }`}
                            onClick={() => setCurrentPage(page)}
                            disabled={currentPage === page}
                          >
                            {page}
                          </button>
                        )
                    )}
                    <button
                      className={classes.pageButton}
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                      }
                      disabled={currentPage === totalPages}
                    >
                      &gt;
                    </button>
                  </div>
                )}
              </>
            ) : (
              <p className={classes.noResults}>Ничего не найдено</p>
            )}
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default ServicePage;
