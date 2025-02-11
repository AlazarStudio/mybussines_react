import React, { useEffect, useState } from 'react';
import classes from './OneServicePage.module.css';
import DOMPurify from 'dompurify';
import { Link, useParams } from 'react-router-dom';
import serverConfig from '../../../serverConfig';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import uploadsConfig from '../../../uploadsConfig';
import Bid from '../../ui/Bid/Bid';

function OneServicePage() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/services`);
        if (!response.ok) throw new Error(`Ошибка ${response.status}`);

        const servicesData = await response.json();
        setServices(servicesData);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const currentServices = services.find(
    (item) =>
      transliterate(item.title.replaceAll('«', '').replaceAll('»', '')) ===
      decodedTitle
  );

  if (loading) {
    return (
      <CenterBlock>
        <WidthBlock>
          <h2>Загрузка...</h2>
        </WidthBlock>
      </CenterBlock>
    );
  }

  if (!currentServices) {
    return (
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <h1>Услуга не найдена</h1>
            <Link to="/service" className={classes.backLink}>
              Вернуться к списку услуг
            </Link>
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
            <Link to="/services">Услуги / </Link>
            <span>{currentServices.title}</span>
          </div>

          <div className={classes.containerNews}>
            <span>{currentServices.title}</span>
            <p
              className={classes.articleText}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(currentServices.description),
              }}
            ></p>
            {currentServices.img && currentServices.img.length > 0 && (
              <img
                src={`${uploadsConfig}${currentServices.img[0]}`}
                alt={currentServices.title}
              />
            )}
          </div>
        </div>
        <Bid />
      </WidthBlock>
    </CenterBlock>
  );
}

export default OneServicePage;
