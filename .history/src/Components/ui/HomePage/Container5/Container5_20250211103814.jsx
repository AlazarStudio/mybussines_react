import React, { useEffect, useState } from 'react';
import classes from './Container5.module.css';
import { useNavigate } from 'react-router-dom';
import serverConfig from '../../../../serverConfig';
import uploadsConfig from '../../../../uploadsConfig';

function Container5({ children, ...props }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/news`);
        const newsData = await response.json();

        // ✅ Фильтруем только

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

  // const handlePageClick = (data) => {
  //   setCurrentPage(data.selected);
  // };
  // console.log(123, news);
  // const offset = currentPage * itemsPerPage;
  // const currentNews = news.slice(offset, offset + itemsPerPage);

  // const handleNewsClick = (id) => {
  //   navigate(`/news/${id}`); // Перенаправляем на страницу с деталями новости
  // };

  // Функция для транслитерации текста
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

  return (
    <>
      <div className={classes.title}>
        <span>Последние новости</span>
        <button onClick={() => navigate('/news')}>Смотреть все</button>
      </div>
      <div className={classes.container}>
        {news.map((el) => (
          <div className={classes.containerCard} key={el.id}>
            <div className={classes.containerCardImg}>
              <img src={`${uploadsConfig}${el.img[0]}`} />
            </div>
            <div className={classes.containerCardCenter}>
              <img src="/images/newsRec.png" />
              <span>{el.title}</span>

              <span>{new Date(el.date).toLocaleDateString('ru-RU')}</span>

              <span
                className={classes.readMore}
                onClick={() =>
                  navigate(
                    `/news/${encodeURIComponent(
                      transliterate(
                        el.title.replaceAll('«', '').replaceAll('»', '')
                      )
                    )}`
                  )
                }
              >
                Читать дальше {'>>'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Container5;
