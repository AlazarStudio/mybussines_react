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
  const [activeImage, setActiveImage] = useState(null);

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

  useEffect(() => {
    if (!activeImage) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  const imageUrlRegex = /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i;
  const urlRegex = /(https?:\/\/[^\s<>"']+)/g;

  const isImageUrl = (url) => imageUrlRegex.test(url);

  const splitTextByUrls = (text) => {
    const parts = [];
    let lastIndex = 0;
    for (const match of text.matchAll(urlRegex)) {
      if (match.index > lastIndex) {
        parts.push({ type: 'text', value: text.slice(lastIndex, match.index) });
      }
      parts.push({ type: 'url', value: match[0] });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push({ type: 'text', value: text.slice(lastIndex) });
    }
    return parts;
  };

  const normalizeUrlToken = (token) => {
    const trimmed = token.replace(/[),.;!?]+$/g, '');
    const trailing = token.slice(trimmed.length);
    return { url: trimmed, trailing };
  };

  const prepareArticleHtml = (rawHtml) => {
    if (!rawHtml) return '';
    if (typeof window === 'undefined' || !window.DOMParser) {
      return DOMPurify.sanitize(rawHtml);
    }

    const sanitized = DOMPurify.sanitize(rawHtml);
    const parser = new DOMParser();
    const doc = parser.parseFromString(sanitized, 'text/html');
    const showText =
      typeof NodeFilter !== 'undefined' ? NodeFilter.SHOW_TEXT : 4;
    const walker = doc.createTreeWalker(doc.body, showText);
    const textNodes = [];

    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parentTag = node.parentElement?.tagName?.toLowerCase();
      if (!node.nodeValue || !node.nodeValue.trim()) continue;
      if (parentTag === 'a' || parentTag === 'script' || parentTag === 'style') {
        continue;
      }
      textNodes.push(node);
    }

    textNodes.forEach((node) => {
      const parts = splitTextByUrls(node.nodeValue);
      if (parts.length === 1 && parts[0].type === 'text') return;

      const fragment = doc.createDocumentFragment();

      parts.forEach((part) => {
        if (part.type === 'text') {
          fragment.appendChild(doc.createTextNode(part.value));
          return;
        }

        // const { url, trailing } = normalizeUrlToken(part.value);
        // if (!url) {
        //   fragment.appendChild(doc.createTextNode(part.value));
        //   return;
        // }

        if (isImageUrl(url)) {
          const link = doc.createElement('a');
          link.href = url;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';

          const img = doc.createElement('img');
          img.src = url;
          img.alt = '';
          img.loading = 'lazy';
          img.decoding = 'async';

          link.appendChild(img);
          fragment.appendChild(link);
        } else {
          const link = doc.createElement('a');
          link.href = url;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.textContent = url;
          fragment.appendChild(link);
        }

        if (trailing) {
          fragment.appendChild(doc.createTextNode(trailing));
        }
      });

      node.parentNode.replaceChild(fragment, node);
    });

    return doc.body.innerHTML;
  };

  const currentNews = news.find((item) => slugify(item.title) === decodedTitle);
  const images = Array.isArray(currentNews?.img) ? currentNews.img : [];
  const heroImage = images[0];
  const galleryImages = images.slice(1);
  const formattedDate = currentNews?.date
    ? new Date(currentNews.date).toLocaleDateString('ru-RU')
    : '';

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

  const openModal = (src, alt = '') => {
    if (!src) return;
    setActiveImage({ src, alt });
  };

  const closeModal = () => setActiveImage(null);

  const handleModalOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleArticleClick = (event) => {
    const target = event.target;
    if (target?.tagName !== 'IMG') return;
    event.preventDefault();
    const src = target.getAttribute('src');
    if (src) {
      openModal(src, target.getAttribute('alt') || '');
    }
  };

  console.log(currentNews);
  

  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.box}>
          <div className={classes.container}>
            <div className={classes.containerNav}>
              <Link to="/">Главная / </Link>
              <Link to="/news">Новости / </Link>
              <span className={classes.breadcrumbTitle}>{currentNews.title}</span>
            </div>

            <div className={classes.containerNews}>
              <h1 className={classes.title}>{currentNews.title}</h1>
              {formattedDate && (
                <p className={classes.date}>{formattedDate}</p>
              )}

              {heroImage && (
                <div className={classes.hero}>
                  <img
                    className={`${classes.heroImage} ${classes.clickableImage}`}
                    src={`${uploadsConfig}${heroImage}`}
                    alt={currentNews.title}
                    onClick={() =>
                      openModal(
                        `${uploadsConfig}${heroImage}`,
                        currentNews.title
                      )
                    }
                  />
                </div>
              )}

              <div
                className={classes.articleText}
                onClick={handleArticleClick}
                dangerouslySetInnerHTML={{
                  __html: currentNews.description,
                }}
              ></div>

              {galleryImages.length > 0 && (
                <div className={classes.gallery}>
                  {galleryImages.map((image, index) => (
                    <div
                      className={classes.galleryItem}
                      key={`${image}-${index}`}
                    >
                      <img
                        className={classes.clickableImage}
                        src={`${uploadsConfig}${image}`}
                        alt={`${currentNews.title} ${index + 2}`}
                        onClick={() =>
                          openModal(
                            `${uploadsConfig}${image}`,
                            `${currentNews.title} ${index + 2}`
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </WidthBlock>
      {activeImage && (
        <div
          className={classes.modalOverlay}
          onClick={handleModalOverlayClick}
          role="presentation"
        >
          <div className={classes.modalContent}>
            <button
              type="button"
              className={classes.modalClose}
              onClick={closeModal}
              aria-label="Закрыть"
            >
              &times;
            </button>
            <img
              className={classes.modalImage}
              src={activeImage.src}
              alt={activeImage.alt}
            />
          </div>
        </div>
      )}
    </CenterBlock>
  );
}

export default OneNewsPage;
