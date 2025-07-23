// Обновлённый и полный файл OneNewsPage.jsx с защитой от decodeURIComponent ошибок и корректной работой slugify

import React, { useEffect, useState } from 'react';
import classes from './OneNewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import DOMPurify from 'dompurify';
import { Link, useLocation, useParams } from 'react-router-dom';
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

  return title
    .replaceAll('«', '')
    .replaceAll('»', '')
    .replace(/\s+/g, ' ')
    .trim()
    .split('')
    .map((char) => map[char] || char)
    .join('');
}

function OneNewsPage() {
  const { title } = useParams();
  const location = useLocation();
  let decodedTitle = '';
  try {
    decodedTitle = decodeURIComponent(title);
  } catch (e) {
    console.warn('Некорректный URL, используем исходное значение', e);
    decodedTitle = title;
  }

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // скролл вверх при изменении маршрута

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/news`);
        const newsData = await response.json();
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

  function linkify(text) {
    const urlRegex = /((https?:\/\/[^\s<>"]+))/g;
    return text.replace(urlRegex, (url) => {
      const safeUrl = DOMPurify.sanitize(url); // защита от XSS
      return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeUrl}</a>`;
    });
  }

  const currentNews = news.find((item) => slugify(item.title) === decodedTitle);

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
        <div className={classes.box}>
          <div className={classes.container}>
            <div className={classes.containerNav}>
              <Link to="/">Главная / </Link>
              <Link to="/news">Новости / </Link>
              <span>{currentNews.title}</span>
            </div>

            <div className={classes.containerNews}>
              <span>{currentNews.title}</span>
              <div
                className={classes.articleText}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(linkify(currentNews.description)),
                }}
              ></div>

              <img
                src={`${uploadsConfig}${currentNews.img[0]}`}
                alt={currentNews.title}
              />
            </div>
          </div>
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default OneNewsPage;
