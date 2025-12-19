import React, { useEffect, useState } from 'react';
import classes from './SamozanPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useLocation, useNavigate } from 'react-router-dom';
import Bid from '../../ui/Bid/Bid';
import serverConfig from '../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';

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
  return String(title || '')
    .replaceAll('«', '')
    .replaceAll('»', '')
    .replace(/\s+/g, ' ')
    .trim()
    .split('')
    .map((char) => map[char] || char)
    .join('');
}

function SamozanPage({ children, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [supports, setSupports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

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

        // допускаем только нужные id в заданном порядке
        const ALLOWED = [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64];
        const orderIndex = new Map(ALLOWED.map((id, i) => [id, i]));
        const filteredSorted = raw
          .filter((s) => ALLOWED.includes(s.id))
          .sort((a, b) => orderIndex.get(a.id) - orderIndex.get(b.id));

        setSupports(filteredSorted);
      } catch (e) {
        console.error('Ошибка загрузки данных:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={classes.containerTop}>
        <CenterBlock>
          <WidthBlock>
            <div className={classes.container}>
              <div className={classes.containerText}>
                <span>ПОДДЕРЖКА УЧАСТНИКОВ СВО</span>
                {/* <span>Построить бизнес просто — стань самозанятым</span> */}
                <button onClick={() => navigate('/contacts#bid')}>
                  Записаться на консультацию
                </button>
              </div>
              <img src="/images/svo111.jpg" alt="" />
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>

      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            <span>Меры поддержки</span>
          </div>

          {/* карточки как делали выше (ракета + оверлей) */}
          <div className={classes.srvGrid}>
            {!loading && supports.length === 0 && (
              <div className={classes.empty}>Пока нет услуг.</div>
            )}

            {supports.map((el) => (
              <div
                key={el.id}
                className={classes.srvCard}
                onMouseEnter={() => setHoveredId(el.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* 1) картинка услуги (иконка/логотип) */}
                {el?.img?.[0] && (
                  <img
                    src={`${uploadsConfig}${el.img[0]}`}
                    className={classes.srvCardImg}
                    alt={el.title}
                  />
                )}

                {/* 2) фон-ракета справа */}
                <img
                  src="/images/roket.png"
                  alt=""
                  className={classes.srvCardBgRocket}
                />

                {/* 3) оранжевый оверлей слева (анимация при ховере) */}
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

export default SamozanPage;
