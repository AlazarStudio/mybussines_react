import React, { useEffect, useRef, useState } from 'react';
import classes from './ServicePage.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import serverConfig from '../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';

const ITEMS_PER_PAGE = 12;

// ❌ Какие id скрывать
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
    '%': '',
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

function ServicePage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [hovered, setHovered] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/services`);
        if (!response.ok) throw new Error(`Ошибка ${response.status}`);
        const raw = await response.json();
        const servicesData = Array.isArray(raw) ? raw : [];

        // 🔒 Сразу выкидываем запрещённые id из состояния
        const cleaned = servicesData.filter(
          (el) => !EXCLUDED_IDS.has(getId(el))
        );
        setService(cleaned);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Дебаунс поиска
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(t);
  }, [searchQuery]);

  // Фильтрация по запросу
  const filteredServices = service.filter((el) =>
    el.title?.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const paginated = filteredServices.slice(
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
    const out = [];
    let last;

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - delta && i <= current + delta)
      ) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (last) {
        if (i - last === 2) out.push(last + 1);
        else if (i - last > 2) out.push('...');
      }
      out.push(i);
      last = i;
    }
    return out;
  }

  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div ref={cardsRef} className={classes.input}>
            <input
              type="text"
              placeholder="Найти..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={classes.searchInput}
            />
            {filteredServices.length > 0 ? (
              <span className={classes.searchCount}>
                Найдено: {filteredServices.length}
              </span>
            ) : (
              <span className={classes.searchCount}>Ничего не найдено</span>
            )}
          </div>

          {loading && <p>Загрузка...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className={classes.container}>
            {filteredServices.length > 0 ? (
              <>
                {paginated.map((el) => (
                  <div
                    className={classes.containerCard}
                    onMouseEnter={() => setHovered(getId(el))}
                    onMouseLeave={() => setHovered(null)}
                    key={getId(el)}
                  >
                    <img
                      src={`${uploadsConfig}${el?.img?.[0] || ''}`}
                      className={classes.containerCardImg}
                      alt={el.title}
                      loading="lazy"
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
                            hovered === getId(el)
                              ? '/images/Group16.svg'
                              : '/images/Group 15.svg'
                          }
                          alt="Подробнее"
                        />
                      </span>
                    </div>
                  </div>
                ))}

                {totalPages > 1 && (
                  <div className={classes.pagination}>
                    <button
                      className={classes.pageButton}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      &lt;
                    </button>
                    {getPaginationRange(currentPage, totalPages).map(
                      (page, idx) =>
                        page === '...' ? (
                          <span
                            key={`ellipsis-${idx}`}
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
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                    >
                      &gt;
                    </button>
                  </div>
                )}
              </>
            ) : (
              !loading && <p className={classes.noResults}>Ничего не найдено</p>
            )}
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default ServicePage;
