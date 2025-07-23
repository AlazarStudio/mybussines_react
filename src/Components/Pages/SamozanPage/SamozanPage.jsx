import React, { useEffect, useState } from 'react';
import classes from './SamozanPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useLocation, useNavigate } from 'react-router-dom';
// import { supports } from '../../../../bd';
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

function SamozanPage({ children, ...props }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

    const location = useLocation();

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // скролл вверх при изменении маршрута
  
    const [supports, setSupports] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`${serverConfig}/supports`);
          const supportsData = await response.json();
  
          // ✅ Фильтруем только
          const filteredSupports = supportsData.filter((support) =>
            support.tags?.some((tag) => tag.title === 'Самозанятому')
          );
  
          setSupports(filteredSupports);
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
      <div className={classes.containerTop}>
        {/* <img src="/images/samozan1.png" className={classes.img1} /> */}
        <CenterBlock>
          <WidthBlock>
            <div className={classes.container}>
              {' '}
              <div className={classes.containerText}>
                <span>КАК СТАТЬ САМОЗАНЯТЫМ</span>
                <span>Построить бизнес просто — стань самозанятым</span>
                <button onClick={() => navigate('/contacts#bid')}>
                  Записаться на консультацию
                </button>
              </div>
              <img src="/images/samozan2.png" />
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>

      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            <span>Меры поддержки</span>
          </div>
          <div className={classes.container1}>
            {supports.map((support) => (
              <div
                className={classes.containerGroupContentCard}
                key={support.id}
              >
                <img src={`${uploadsConfig}${support.img[0]}`} />
                <span>{support.title}</span>
                <span
                  onClick={() =>
                    navigate(
                      `/supports/${encodeURIComponent(slugify(support.title))}`
                    )
                  }
                >
                  Узнать больше
                </span>
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
