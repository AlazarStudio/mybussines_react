import React, { useEffect, useState, useMemo, useRef } from 'react';
import classes from './NewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useLocation, useNavigate } from 'react-router-dom';
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

function NewsPage() {
  const navigate = useNavigate();

    const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // скролл вверх при изменении маршрута

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const newsRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/news`);
        if (!response.ok) throw new Error(`Ошибка ${response.status}`);
        const newsData = await response.json();

        // Сортировка по убыванию даты (от новых к старым)
        newsData.sort((a, b) => new Date(b.date) - new Date(a.date));

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

  const debounceSearch = useMemo(() => {
    let timeout;
    return (value) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setSearchTerm(value);
        setCurrentPage(1); // сбрасываем страницу при новом поиске
      }, 300);
    };
  }, []);

  const filteredNews = news.filter((el) => {
    const matchesTitle = el.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDate = searchDate
      ? new Date(el.date).toLocaleDateString('ru-RU') === searchDate
      : true;
    return matchesTitle && matchesDate;
  });

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
  if (newsRef.current) {
    newsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <CenterBlock>
      <WidthBlock>
        <div className={classes.search} ref={newsRef}>
          <input
            type="text"
            placeholder="Искать новости"
            onChange={(e) => debounceSearch(e.target.value)}
          />
          <span className={classes.searchCount}>
            {filteredNews.length > 0
              ? `Найдено: ${filteredNews.length}`
              : 'Ничего не найдено'}
          </span>
        </div>

        {loading ? (
          <div className={classes.loader}>Загрузка новостей...</div>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <>
            <div className={classes.container}>
              {paginatedNews.map((el) => (
                <div className={classes.containerCard} key={el.id}>
                  <div className={classes.containerCardImg}>
                    <img src={`${uploadsConfig}${el.img[0]}`} alt={el.title} />
                  </div>
                  <div className={classes.containerCardCenter}>
                    <img src="/images/newsRec.png" alt="Decoration" />
                    <span>{el.title}</span>
                  </div>
                  <div className={classes.containerCardBottom}>
                    <span>{new Date(el.date).toLocaleDateString('ru-RU')}</span>
                    <span
                      className={classes.readMore}
                      onClick={() =>
                        navigate(
                          `/news/${encodeURIComponent(slugify(el.title))}`
                        )
                      }
                    >
                      Читать дальше {'>>'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Пагинация */}
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
        )}
      </WidthBlock>
    </CenterBlock>
  );
}

export default NewsPage;
