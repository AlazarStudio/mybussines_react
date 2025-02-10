import React, { useEffect, useState } from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import DOMPurify from 'dompurify'
import { news } from '../../../../bd';
import { Link, useParams } from 'react-router-dom';
import serverConfig from '../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';

function OneNewsPage() {
  const { title } = useParams();

  // Декодируем заголовок из URL
  const decodedTitle = decodeURIComponent(title);

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

  // Приводим заголовок к тому же виду, что и в NewsPage
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

  // Найти новость по заголовку
  const currentNews = news.find(
    (item) =>
      transliterate(item.title.replaceAll('«', '').replaceAll('»', '')) ===
      decodedTitle
  );

  if (!currentNews) {
    return (
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <h1>Новость не найдена</h1>
            <Link to="/news">Вернуться к списку новостей</Link>
          </div>
        </WidthBlock>
      </CenterBlock>
    );
  }

  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.container}>
          <div className={classes.containerNav}>
            <Link to="/">Главная / </Link>
            <Link to="/news">Новости / </Link>
            <span>{currentNews.title}</span>
          </div>

          <div className={classes.containerNews}>
            <span>{currentNews.title}</span>
            <p
            className={classes.articleText}
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(currentNews.description)
							// __html: `${article.text}`
						}}
					></p>
            {/* <span>{new Date(currentNews.date).toLocaleDateString('ru-RU')}</span> */}
            <img src={`${uploadsConfig}${currentNews.img[0]}`} alt={currentNews.title} />
          </div>
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default OneNewsPage;
