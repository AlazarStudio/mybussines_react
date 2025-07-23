import React, { useEffect, useRef, useState } from 'react';
import classes from './SupportPageAll.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import serverConfig from '../../../../serverConfig';
import uploadsConfig from '../../../../uploadsConfig';
import { useNavigate } from 'react-router-dom';

const ITEMS_PER_PAGE = 12;

export default function SupportPageAll({ activeTab }) {
  const navigate = useNavigate();
  const [supports, setSupports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // 🔍 Состояние для поиска
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/supports`);
        const supportsData = await response.json();
        setSupports(supportsData);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // ⏱ 300 мс задержка

    return () => clearTimeout(handler);
  }, [searchQuery]);

  // 🔍 Фильтрация по вкладке (federal/regional) + поиск по названию
  const filteredSupportsType = supports
    .filter((support) => {
      if (activeTab === 'federal') {
        return support.typeSupport.title === 'Федеральная мера поддержки';
      }
      if (activeTab === 'regional') {
        return support.typeSupport.title === 'Региональная мера поддержки';
      }
      return false;
    })
    .filter((support) =>
      support.title.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

  const totalPages = Math.ceil(filteredSupportsType.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredSupportsType.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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

  const transliterate = (text) => {
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
      Ы: 'Y',
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
      ы: 'y',
      э: 'e',
      ю: 'yu',
      я: 'ya',
      ' ': '-',
    };

    return text
      .split('')
      .map((char) => map[char] || char)
      .join('');
  };

  useEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}, [currentPage]);


  return (
    <>
      <div className={classes.back}>
        <CenterBlock>
          <WidthBlock>
            <div className={classes.containerGroup} ref={scrollRef}>
              {/* 🔍 Поле ввода для поиска */}
              <div className={classes.inputWrapper}>
                <input
                  type="text"
                  placeholder="Найти..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={classes.searchInput}
                />
                <span className={classes.searchIcon}>
                  <img src="/images/coolicon (4).png" />
                </span>
              </div>

              <div className={classes.containerGroupContent}>
                {paginatedNews.length > 0 ? (
                  paginatedNews.map((support) => (
                    <div
                      className={classes.containerGroupContentCard}
                      key={support.id}
                    >
                      <img src={`${uploadsConfig}${support.img[0]}`} />
                      <span>{support.title}</span>
                      <span
                        onClick={() =>
                          navigate(
                            `/supports/${encodeURIComponent(
                              transliterate(
                                support.title
                                  .replaceAll('«', '')
                                  .replaceAll('»', '')
                              )
                            )}`
                          )
                        }
                        style={{
                          background:
                            activeTab === 'federal' ? '#3D2A92' : '#733897',
                        }}
                      >
                        Узнать больше
                      </span>
                    </div>
                  ))
                ) : (
                  <p className={classes.noResults}>Ничего не найдено</p>
                )}
              </div>

              {totalPages > 1 && (
                <div className={classes.pagination}>
                  <button
                    style={{
                      background:
                        activeTab === 'federal' ? '#3D2A92' : '#733897',
                    }}
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
                          style={{
                            background:
                              activeTab === 'federal' ? '#3D2A92' : '#733897',
                          }}
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
                    style={{
                      background:
                        activeTab === 'federal' ? '#3D2A92' : '#733897',
                    }}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    &gt;
                  </button>
                </div>
              )}
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}
