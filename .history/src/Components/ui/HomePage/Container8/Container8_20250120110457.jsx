import React, { useState } from 'react';
import classes from './Container8.module.css';
import { useNavigate } from 'react-router-dom';
import { videos } from '../../../../../bd';

function Container8({ children, ...props }) {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(null); // Состояние для активного видео

  return (
    <>
      <div className={classes.title}>
        <span>Видеоблог</span>
        <button onClick={() => navigate('/video')}>Смотреть все</button>
      </div>

      <div className={classes.container}>
        {videos.map((el) => (
          <div
            key={el.id}
            className={classes.videoCard}
            onClick={() => setCurrentVideo(el)} // Устанавливаем активное видео
          >
            <img src={el.img} alt={el.title} className={classes.thumbnail} />
            <div className={classes.videoInfo}>
              <span className={classes.videoTitle}>{el.title}</span>
              <span className={classes.videoDate}>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Блок для отображения плеера */}
      {currentVideo && (
        <div className={classes.player}>
          <h3>{currentVideo.title}</h3>
          <iframe
            width="100%"
            height="400px"
            src={currentVideo.url.replace('watch?v=', 'embed/')} // Преобразуем ссылку для плеера YouTube
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className={classes.closeButton} onClick={() => setCurrentVideo(null)}>
            Закрыть
          </button>
        </div>
      )}
    </>
  );
}

export default Container8;
