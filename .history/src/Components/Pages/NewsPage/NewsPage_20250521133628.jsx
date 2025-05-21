import React, { useEffect, useState, useMemo } from 'react';
import classes from './NewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';
import serverConfig from '../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';

function NewsPage() {
  const navigate = useNavigate();

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔍 Состояние для поиска
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDate, setSearchDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/news`);
        if (!response.ok) throw new Error(`Ошибка ${response.status}`);

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

  // ✅ Дебаунс для поиска (300ms)
  const debounceSearch = useMemo(() => {
    let timeout;
    return (value) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setSearchTerm(value);
      }, 300);
    };
  }, []);

  // 🔍 Фильтруем новости по названию и дате
  const filteredNews = news.filter((el) => {
    const matchesTitle = el.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = searchDate
      ? new Date(el.date).toLocaleDateString('ru-RU') === searchDate
      : true;

    return matchesTitle && matchesDate;
  });

  const transliterate = (text) => {
    const map = {
      А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'E', Ё: 'E', Ж: 'Zh', З: 'Z', И: 'I',
      Й: 'Y', К: 'K', Л: 'L', М: 'M', Н: 'N', О: 'O', П: 'P', Р: 'R', С: 'S', Т: 'T',
      У: 'U', Ф: 'F', Х: 'Kh', Ц: 'Ts', Ч: 'Ch', Ш: 'Sh', Щ: 'Shch', Ы: 'Y', Э: 'E',
      Ю: 'Yu', Я: 'Ya', а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh',
      з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r',
      с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'shch',
      ы: 'y', э: 'e', ю: 'yu', я: 'ya', ' ': '-',
    };
    return text.split('').map((char) => map[char] || char).join('');
  };

  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.search}>
          {/* 🔍 Поле поиска по названию */}
          <input
            type="text"
            placeholder="Искать новости"
            onChange={(e) => debounceSearch(e.target.value)}
          />
          {/* 📅 Поле поиска по дате
          <input
            type="date"
            onChange={(e) => setSearchDate(e.target.value)}
          /> */}
        </div>

        {/* 🕓 Индикатор загрузки */}
        {loading && <p>Загрузка...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Если новостей нет */}
        {!loading && filteredNews.length === 0 && <p>Нет новостей по вашему запросу.</p>}

        <div className={classes.container}>
          {filteredNews.map((el) => (
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
                      `/news/${encodeURIComponent(
                        transliterate(el.title.replaceAll('«', '').replaceAll('»', ''))
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
      </WidthBlock>
    </CenterBlock>
  );
}

export default NewsPage;
