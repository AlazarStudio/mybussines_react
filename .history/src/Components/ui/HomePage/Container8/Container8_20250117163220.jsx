import React, { useState, useEffect, useRef } from 'react';
import classes from './Container8.module.css';
import { useNavigate } from 'react-router-dom';

function Container8({ children, ...props }) {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(null); // Состояние для активного видео
  const videoPlayerRef = useRef(null); // Ссылка на контейнер плеера
  const videos = [
    {
      id: 1,
      title: 'Видео 1',
      url: 'https://www.youtube.com/embed/1EOtpTtBXTc',
    },
    {
      id: 2,
      title: 'Видео 2',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 3,
      title: 'Видео 3',
      url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    },
  ];

  // Обработчик кликов для закрытия плеера
  const handleClickOutside = (event) => {
    if (videoPlayerRef.current && !videoPlayerRef.current.contains(event.target)) {
      setCurrentVideo(null); // Сбрасываем состояние видео
    }
  };

  // Добавление и удаление обработчиков событий
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={classes.title}>
        <span>Видеоблог</span>
        <button onClick={() => navigate('/video')}>Смотреть все</button>
      </div>
      <div>
        <h1>Галерея видео</h1>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-preview"
              onClick={() => setCurrentVideo(video.url)} // Устанавливаем текущее видео
              style={{
                width: '300px',
                height: '200px',
                backgroundColor: '#000',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              {video.title}
            </div>
          ))}
        </div>

        {currentVideo && (
          <div
            ref={videoPlayerRef}
            className="video-player"
            style={{ marginTop: '20px', position: 'relative' }}
          >
            <iframe
              width="560"
              height="315"
              src={currentVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
}

export default Container8;
