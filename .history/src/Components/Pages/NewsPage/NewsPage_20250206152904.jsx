import React from 'react';
import classes from './NewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
// import { news } from '../../../../bd';
import { useNavigate } from 'react-router-dom';
import serverConfig from '../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';

function NewsPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

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
    <CenterBlock>
      <WidthBlock>
        <div className={classes.search}>
          <input placeholder="Искать новости" />
        </div>
        <div className={classes.container}>
          {news.map((el) => (
            <div className={classes.containerCard} key={el.id}>
              <img
                src={el.img}
                className={classes.containerCardImg}
                alt={el.title}
              />
              <div className={classes.containerCardCenter}>
                <span>{el.title}</span>
              </div>
              <div className={classes.containerCardBottom}>
                <span>{el.date}</span>
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
      </WidthBlock>
    </CenterBlock>
  );
}

export default NewsPage;
