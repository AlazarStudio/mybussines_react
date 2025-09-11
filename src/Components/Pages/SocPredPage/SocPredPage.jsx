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

  // раскрытая группа (строго одна)
  const [expanded, setExpanded] = useState(() =>
    urlOkved ? urlOkved.split('.').slice(0, 2).join('.') : null
  );

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

        // присваиваем okvedCodes
        const withCodes = raw.map((s) =>
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

  const handleToggleGroup = (groupCode) => {
    setExpanded((prev) => (prev === groupCode ? null : groupCode));
  };

  const handleSelectOkved = (code) => {
    if (isGroup(code)) {
      handleToggleGroup(code);
      return;
    }
    const next = code === selectedOkved ? '' : code;
    setSelectedOkved(next);
    next ? setSearchParams({ okved: next }) : setSearchParams({});
    const root = code.split('.').slice(0, 2).join('.');
    setExpanded(root);

    // скролл к карточкам
    requestAnimationFrame(() => {
      servicesRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  useEffect(() => {
    if (!loading && selectedOkved && servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [loading, selectedOkved]);

  const countByCode = (code) =>
    supports.reduce(
      (acc, s) => acc + (matchOkved(getOkvedCodes(s), code) ? 1 : 0),
      0
    );

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
                  Меры поддержки бизнесу в сфере легкой промышленности
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

          {/* АККОРДЕОН ОКВЭД */}
          <div className={classes.containerMenu}>
            {OKVEDS.map((group) => {
              const isExpanded = expanded === group.code;
              const childrenCount = group.children?.length || 0;
              return (
                <div key={group.code} className={classes.containerMenuEl}>
                  <div className={classes.groupRow}>
                    <button
                      type="button"
                      className={classes.caret}
                      aria-label={isExpanded ? 'Свернуть' : 'Развернуть'}
                      aria-expanded={isExpanded}
                      onClick={() => handleToggleGroup(group.code)}
                    />
                    <button
                      type="button"
                      className={classes.okvedBtn}
                      onClick={() => handleToggleGroup(group.code)}
                    >
                      <span className={classes.label}>
                        {group.label}
                        <span className={classes.countText}>
                          {' '}
                          — {childrenCount}{' '}
                          {childrenCount === 1
                            ? 'подпункт'
                            : childrenCount >= 2 && childrenCount <= 4
                            ? 'подпункта'
                            : 'подпунктов'}
                        </span>
                      </span>
                      <em className={classes.badge}>{childrenCount}</em>
                    </button>
                  </div>

                  {isExpanded && !!group.children?.length && (
                    <div className={classes.childrenList}>
                      {group.children.map((child) => {
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
                                — {childCount} услуг
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

          {/* КАРТОЧКИ УСЛУГ (верстка из ServicePage) */}
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
                        `/supports/${encodeURIComponent(slugify(el.title))}`
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
