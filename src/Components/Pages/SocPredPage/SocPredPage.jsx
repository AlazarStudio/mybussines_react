import React, { useEffect, useMemo, useRef, useState } from 'react';
import classes from './SocPredPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import serverConfig from '../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';
import Bid from '../../ui/Bid/Bid';

// --- утилита для слага ---
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
    .map((ch) => map[ch] || ch)
    .join('');
}

// --- справочник ОКВЭД ---
const OKVEDS = [
  {
    code: '14.11',
    label: '14.11 — производство одежды из кожи',
    children: [
      {
        code: '14.11.1',
        label:
          '14.11.1 Производство одежды из кожи, кроме изготовленных по индивидуальному заказу',
      },
      {
        code: '14.11.2',
        label:
          '14.11.2 Пошив одежды из кожи по индивидуальному заказу населения',
      },
    ],
  },
  {
    code: '14.12',
    label: '14.12 — производство спецодежды',
    children: [
      {
        code: '14.12.1',
        label:
          '14.12.1 Производство спецодежды, кроме изготовленных по индивидуальному заказу',
      },
      {
        code: '14.12.2',
        label:
          '14.12.2 Пошив производственной одежды по индивидуальному заказу населения',
      },
    ],
  },
  {
    code: '14.13',
    label: '14.13 — производство прочей верхней одежды',
    children: [
      {
        code: '14.13.1',
        label: '14.13.1 Производство верхней трикотажной или вязаной одежды',
      },
      {
        code: '14.13.2',
        label:
          '14.13.2 Производство верхней одежды из текстильных материалов, кроме трикотажных или вязаных',
      },
      {
        code: '14.13.3',
        label:
          '14.13.3 Пошив и вязание прочей верхней одежды по индивидуальному заказу населения',
      },
    ],
  },
  {
    code: '14.14',
    label: '14.14 — производство нательного белья',
    children: [
      {
        code: '14.14.1',
        label: '14.14.1 Производство трикотажного и вязаного нательного белья',
      },
      {
        code: '14.14.2',
        label: '14.14.2 Производство нательного белья из тканей',
      },
      {
        code: '14.14.3',
        label:
          '14.14.3 Производство трикотажных или вязаных футболок, маек и прочих нижних рубашек',
      },
      {
        code: '14.14.4',
        label:
          '14.14.4 Пошив нательного белья по индивидуальному заказу населения',
      },
    ],
  },
  {
    code: '14.19',
    label: '14.19 — производство прочей одежды и аксессуаров одежды',
    children: [
      {
        code: '14.19.1',
        label:
          '14.19.1 Трикотажная/вязаная одежда для детей, спортивная/прочая, аксессуары и детали',
      },
      {
        code: '14.19.2',
        label:
          '14.19.2 Детская/спортивная/прочая одежда и аксессуары из текстильных материалов, кроме трикотажных/вязаных',
      },
      {
        code: '14.19.3',
        label:
          '14.19.3 Аксессуары из кожи; одежда из фетра/нетканых; из текстиля с покрытием',
      },
      { code: '14.19.4', label: '14.19.4 Производство головных уборов' },
      {
        code: '14.19.5',
        label:
          '14.19.5 Пошив/вязание прочей одежды и аксессуаров, головных уборов по индивидуальному заказу',
      },
    ],
  },
  {
    code: '14.20',
    label: '14.20 — производство меховых изделий',
    children: [
      {
        code: '14.20.1',
        label:
          '14.20.1 Производство меховых изделий, кроме изготовленных по индивидуальному заказу',
      },
      {
        code: '14.20.2',
        label:
          '14.20.2 Пошив меховых изделий по индивидуальному заказу населения',
      },
    ],
  },
  {
    code: '14.31',
    label: '14.31 — вязаные и трикотажные чулочно-носочные изделия',
    children: [
      {
        code: '14.31.1',
        label: '14.31.1 Производство (кроме индивидуального заказа)',
      },
      {
        code: '14.31.2',
        label: '14.31.2 Изготовление по индивидуальному заказу населения',
      },
    ],
  },
  {
    code: '14.39',
    label: '14.39 — прочие вязаные и трикотажные изделия',
    children: [
      {
        code: '14.39.1',
        label:
          '14.39.1 Производство прочих вязаных и трикотажных изделий, н.в.д.г.',
      },
      {
        code: '14.39.2',
        label:
          '14.39.2 Изготовление прочих вязаных и трикотажных изделий по индивидуальному заказу населения',
      },
    ],
  },
];

// --- вспомогательные коды для привязки услуг ---
const ALL_CHILD_CODES = OKVEDS.flatMap(
  (g) => g.children?.map((c) => c.code) || []
);
const CODES_FOR_49 = [
  '14.13.1',
  '14.19.1',
  '14.19.4',
  '14.19.5',
  '14.31',
  '14.31.1',
  '14.31.2',
  '14.39',
  '14.39.1',
  '14.39.2',
];

const isGroup = (code) => code.split('.').length === 2;
const matchOkved = (codes, selected) =>
  codes?.some((c) => c === selected || c.startsWith(`${selected}.`));
function getOkvedCodes(support) {
  if (Array.isArray(support?.okvedCodes)) return support.okvedCodes;
  const fromTags = Array.isArray(support?.tags)
    ? support.tags
        .map((t) => String(t?.title || '').trim())
        .filter((t) => /^\d{2}(\.\d+)*$/.test(t))
    : [];
  return fromTags;
}

// нормализация поиска
const norm = (s) =>
  String(s || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
const okvedMatches = (item, q) =>
  item.code.toLowerCase().includes(q) || norm(item.label).includes(q);

// русская плюрализация
function pluralize(n, one, few, many) {
  const mod10 = n % 10,
    mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

// --- helper: подсветка совпадения в тексте ---
const highlight = (text, q) => {
  const t = String(text);
  const n = norm(t);
  const qn = norm(q);
  const idx = n.indexOf(qn);
  if (!qn || idx === -1) return t;
  return (
    <>
      {t.slice(0, idx)}
      <mark>{t.slice(idx, idx + q.length)}</mark>
      {t.slice(idx + q.length)}
    </>
  );
};

function SocPredPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [supports, setSupports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  // блок с услугами (для скролла)
  const servicesRef = useRef(null);

  // выбранный код из URL (подпункты фильтруют, группы — нет)
  const urlOkved = searchParams.get('okved') || '';
  const initialSelected = urlOkved && !isGroup(urlOkved) ? urlOkved : '';
  const [selectedOkved, setSelectedOkved] = useState(initialSelected);

  // раскрытая группа (одна за раз)
  const [expanded, setExpanded] = useState(
    urlOkved ? urlOkved.split('.').slice(0, 2).join('.') : null
  );

  // --- Поиск по ОКВЭД ---
  const [query, setQuery] = useState('');
  // результаты блока "Результаты"
  const [combinedResults, setCombinedResults] = useState([]);

  // --- НОВОЕ: автоподсказки ---
  const suggestWrapRef = useRef(null);
  const [suggestions, setSuggestions] = useState([]); // плоский список {type, code, label, parent?}
  const [isSuggestOpen, setSuggestOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  // показываем ТОЛЬКО эти услуги:
  const ALLOWED_IDS = [35, 34, 33, 32, 30, 29, 28, 27, 26, 23, 21, 44, 45, 49];
  const orderIndex = new Map(ALLOWED_IDS.map((id, i) => [id, i]));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${serverConfig}/services`);
        const data = await res.json();
        const raw = Array.isArray(data) ? data : [];

        const filteredSorted = raw
          .filter((s) => ALLOWED_IDS.includes(s.id))
          .sort((a, b) => orderIndex.get(a.id) - orderIndex.get(b.id));

        const withCodes = filteredSorted.map((s) =>
          s.id === 49
            ? { ...s, okvedCodes: CODES_FOR_49 }
            : { ...s, okvedCodes: ALL_CHILD_CODES }
        );

        setSupports(withCodes);
      } catch (e) {
        console.error('Ошибка загрузки данных:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const countByCode = (code) =>
    supports.reduce(
      (acc, s) => acc + (matchOkved(getOkvedCodes(s), code) ? 1 : 0),
      0
    );

  // построим плоский индекс для подсказок
  const FLAT_ITEMS = useMemo(() => {
    const arr = [];
    for (const g of OKVEDS) {
      arr.push({
        type: 'group',
        code: g.code,
        label: g.label,
        childrenCount: g.children?.length || 0,
      });
      for (const c of g.children || []) {
        arr.push({
          type: 'child',
          code: c.code,
          label: c.label,
          parent: g.code,
        });
      }
    }
    return arr;
  }, []);

  // выбор кода (группа/подпункт)
  const handleSelectOkved = (code) => {
    if (isGroup(code)) {
      setExpanded((prev) => (prev === code ? null : code));
      setSelectedOkved('');
      setSearchParams({});
      setSuggestOpen(false);
      return;
    }
    const next = code === selectedOkved ? '' : code;
    setSelectedOkved(next);
    next ? setSearchParams({ okved: next }) : setSearchParams({});
    const root = code.split('.').slice(0, 2).join('.');
    setExpanded(root);
    setSuggestOpen(false);
    requestAnimationFrame(() => {
      servicesRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  // Поиск — группы и подпункты вместе (кнопка "Найти" или Enter без выбора)
  const runSearch = () => {
    const q = norm(query);
    if (!q) {
      setCombinedResults([]);
      return;
    }

    // Точные совпадения — сразу действие
    const allChildren = OKVEDS.flatMap((g) =>
      (g.children || []).map((c) => ({ ...c, parent: g.code }))
    );
    const exactChild = allChildren.find((c) => c.code.toLowerCase() === q);
    const exactGroup = OKVEDS.find((g) => g.code.toLowerCase() === q);

    if (exactChild) {
      handleSelectOkved(exactChild.code);
      return;
    } else if (exactGroup) {
      setExpanded(exactGroup.code);
      setSelectedOkved('');
      setSearchParams({});
    }

    // Сбор объединённых результатов
    const results = [];
    for (const group of OKVEDS) {
      const groupMatch = okvedMatches(group, q);
      const childrenMatched = (group.children || []).filter((c) =>
        okvedMatches(c, q)
      );

      if (groupMatch || childrenMatched.length) {
        const childrenToShow =
          childrenMatched.length > 0 ? childrenMatched : group.children || [];
        results.push({ group, groupMatch, childrenToShow });
      }
    }
    setCombinedResults(results);
  };

  // --- НОВОЕ: генерация подсказок при наборе
  useEffect(() => {
    const q = norm(query);
    if (!q) {
      setSuggestions([]);
      setSuggestOpen(false);
      setActiveIdx(-1);
      return;
    }

    // приоритезируем: exact code > code startsWith > label startsWith > label includes
    const exact = [];
    const codeStart = [];
    const labelStart = [];
    const labelIncl = [];

    for (const it of FLAT_ITEMS) {
      const code = it.code.toLowerCase();
      const label = norm(it.label);
      if (code === q) exact.push(it);
      else if (code.startsWith(q)) codeStart.push(it);
      else if (label.startsWith(q)) labelStart.push(it);
      else if (label.includes(q)) labelIncl.push(it);
    }

    const seen = new Set();
    const merged = [];
    for (const bucket of [exact, codeStart, labelStart, labelIncl]) {
      for (const it of bucket) {
        if (seen.has(it.code)) continue;
        seen.add(it.code);
        merged.push(it);
      }
    }

    const limited = merged.slice(0, 12);
    setSuggestions(limited);
    setSuggestOpen(limited.length > 0);
    setActiveIdx(limited.length ? 0 : -1);
  }, [query, FLAT_ITEMS]);

  // Закрытие по клику вне списка
  useEffect(() => {
    const onDocClick = (e) => {
      if (!suggestWrapRef.current) return;
      if (!suggestWrapRef.current.contains(e.target)) setSuggestOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  // Клавиатура для инпута/подсказок
  const onInputKeyDown = (e) => {
    if (!isSuggestOpen || !suggestions.length) {
      if (e.key === 'Enter') runSearch();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const it = suggestions[activeIdx] || suggestions[0];
      if (it) handleSelectOkved(it.code);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setSuggestOpen(false);
    }
  };

  useEffect(() => {
    if (!loading && selectedOkved && servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [loading, selectedOkved]);

  const filteredSupports = useMemo(() => {
    if (!selectedOkved) return supports;
    return supports.filter((s) => matchOkved(getOkvedCodes(s), selectedOkved));
  }, [supports, selectedOkved]);

  return (
    <>
      <div className={classes.containerTop}>
        <CenterBlock>
          <WidthBlock>
            <div className={classes.container}>
              <div className={classes.containerText}>
                <span>
                  Меры поддержки бизнеса в сфере легкой промышленности
                </span>
                <button onClick={() => navigate('/contacts#bid')}>
                  Записаться на консультацию
                </button>
              </div>
              <img src="/images/soc1.png" alt="" />
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>

      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            <span>Поиск и подбор услуг и мер поддержки по ОКВЭД</span>
          </div>

          {/* --- ПОИСК ПО ОКВЭД с автоподсказками --- */}
          <div className={classes.okvedSearchBox}>
            <div className={classes.okvedSearchInputWrap} ref={suggestWrapRef}>
              <input
                className={classes.okvedSearchInput}
                type="text"
                placeholder="Поиск по коду или названию ОКВЭД"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                onFocus={() => suggestions.length && setSuggestOpen(true)}
                aria-autocomplete="list"
                aria-expanded={isSuggestOpen}
                aria-controls="okved-suggest-list"
              />

              {isSuggestOpen && suggestions.length > 0 && (
                <ul
                  id="okved-suggest-list"
                  className={classes.suggestList}
                  role="listbox"
                >
                  {suggestions.map((it, idx) => {
                    const isActive = idx === activeIdx;
                    const isChild = it.type === 'child';
                    const servicesCount = isChild
                      ? countByCode(it.code)
                      : it.childrenCount ?? 0;
                    return (
                      <li
                        key={it.code}
                        role="option"
                        aria-selected={isActive}
                        className={`${classes.suggestItem} ${
                          isActive ? classes.suggestActive : ''
                        }`}
                        onMouseEnter={() => setActiveIdx(idx)}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleSelectOkved(it.code)}
                      >
                        <div className={classes.suggestMain}>
                          <span className={classes.suggestCode}>
                            {/* {highlight(it.code, query)} */}
                          </span>
                          <span className={classes.suggestDivider}>•</span>
                          <span className={classes.suggestLabel}>
                            {highlight(it.label, query)}
                          </span>
                        </div>
                        <div className={classes.suggestMeta}>
                          <span
                            className={`${classes.typeBadge} ${
                              isChild ? classes.badgeChild : classes.badgeGroup
                            }`}
                          >
                            {isChild ? 'подпункт' : 'группа'}
                          </span>
                          <span className={classes.suggestCount}>
                            {isChild
                              ? `${servicesCount} ${pluralize(
                                  servicesCount,
                                  'услуга',
                                  'услуги',
                                  'услуг'
                                )}`
                              : `${servicesCount} ${pluralize(
                                  servicesCount,
                                  'подпункт',
                                  'подпункта',
                                  'подпунктов'
                                )}`}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <button className={classes.okvedSearchButton} onClick={runSearch}>
              Найти
            </button>
          </div>

          {/* ОБЪЕДИНЁННЫЕ РЕЗУЛЬТАТЫ: группы + их подпункты */}
          {combinedResults.length > 0 && (
            <div className={classes.searchResults}>
              <div className={classes.searchSectionTitle}>Результаты</div>
              {combinedResults.map(({ group, groupMatch, childrenToShow }) => {
                const isExpanded = expanded === group.code;
                const childrenCount = group.children?.length || 0;
                const showChildren =
                  childrenToShow.length > 0 ||
                  (groupMatch && (isExpanded || childrenCount <= 6));

                const listToRender =
                  childrenToShow.length > 0
                    ? childrenToShow
                    : isExpanded
                    ? group.children || []
                    : [];

                return (
                  <div key={group.code} className={classes.containerMenuEl}>
                    <button
                      type="button"
                      className={classes.okvedBtn}
                      onClick={() => handleSelectOkved(group.code)}
                    >
                      <span className={classes.label}>
                        {group.label}
                        <span className={classes.countText}>
                          {' '}
                          — {childrenCount}{' '}
                          {pluralize(
                            childrenCount,
                            'подпункт',
                            'подпункта',
                            'подпунктов'
                          )}
                        </span>
                      </span>
                      <em className={classes.badge}>{childrenCount}</em>
                    </button>

                    {showChildren && listToRender.length > 0 && (
                      <div className={classes.childrenList}>
                        {listToRender.map((child) => {
                          const childCount = countByCode(child.code);
                          const childActive = selectedOkved === child.code;
                          return (
                            <button
                              key={child.code}
                              type="button"
                              className={`${classes.okvedChildBtn} ${
                                childActive ? classes.active : ''
                              }`}
                              onClick={() => handleSelectOkved(child.code)}
                            >
                              <span className={classes.label}>
                                {child.label}
                                <span className={classes.countText}>
                                  {' '}
                                  — {childCount}{' '}
                                  {pluralize(
                                    childCount,
                                    'услуга',
                                    'услуги',
                                    'услуг'
                                  )}
                                </span>
                              </span>
                              <em className={classes.badge}>{childCount}</em>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* КАРТОЧКИ УСЛУГ (как на ServicePage) */}
          <div className={classes.srvGrid} ref={servicesRef}>
            {!loading && filteredSupports.length === 0 && (
              <div className={classes.empty}>
                По выбранному ОКВЭД пока нет услуг. Попробуйте выбрать другой
                код.
              </div>
            )}

            {filteredSupports.map((el) => (
              <div
                key={el.id}
                className={classes.srvCard}
                onMouseEnter={() => setHoveredId(el.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {el?.img?.[0] && (
                  <img
                    src={`${uploadsConfig}${el.img[0]}`}
                    className={classes.srvCardImg}
                    alt={el.title}
                  />
                )}

                <img
                  src="/images/roket.png"
                  alt=""
                  className={classes.srvCardBgRocket}
                />
                <img
                  src="/images/orangeSer.png"
                  alt=""
                  className={classes.srvCardBgOrange}
                />

                <div className={classes.srvCardBottom}>
                  <span className={classes.srvTitle}>{el.title}</span>
                  <span
                    className={classes.srvMoreLink}
                    onClick={() =>
                      navigate(
                        `/service/${encodeURIComponent(slugify(el.title))}`
                      )
                    }
                  >
                    <img
                      src={
                        hoveredId === el.id
                          ? '/images/Group16.svg'
                          : '/images/Group 15.svg'
                      }
                      alt="Подробнее"
                      className={classes.srvMoreIcon}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Bid />
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default SocPredPage;
