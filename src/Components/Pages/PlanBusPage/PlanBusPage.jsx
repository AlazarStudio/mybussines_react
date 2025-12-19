import React, { useEffect, useState } from 'react';
import classes from './PlanBusPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useLocation, useNavigate } from 'react-router-dom';
import Bid from '../../ui/Bid/Bid';
import serverConfig from '../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';

function slugify(title) {
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
    Щ: 'Sh',
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
    .map((ch) => map[ch] || ch)
    .join('');
}

function PlanBusPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [supports, setSupports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  // нужные id и их порядок
  const ALLOWED_IDS = [32, 30, 26, 45];
  const orderIndex = new Map(ALLOWED_IDS.map((id, i) => [id, i]));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // берём из /services, т.к. нужны конкретные услуги с этими id
        const response = await fetch(`${serverConfig}/services`);
        const data = await response.json();
        const raw = Array.isArray(data) ? data : [];

        const filteredSorted = raw
          .filter((s) => ALLOWED_IDS.includes(s.id))
          .sort((a, b) => orderIndex.get(a.id) - orderIndex.get(b.id));

        setSupports(filteredSorted);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
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
                <span>КАК СТАТЬ ИНДИВИДУАЛЬНЫМ ПРЕДПРИНИМАТЕЛЕМ</span>
                <button onClick={() => navigate('/contacts#bid')}>
                  Записаться на консультацию
                </button>
              </div>
              <img src="/images/plb2.png" alt="" />
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>

      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            <span>Меры поддержки</span>
          </div>

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

export default PlanBusPage;
