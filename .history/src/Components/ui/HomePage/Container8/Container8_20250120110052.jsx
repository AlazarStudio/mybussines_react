import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { videos } from '../../../../../bd'; // Импорт массива видео
import classes from './Container8.module.css'; // Ваши стили

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

      {/* Плеер для активного видео */}
      {currentVideo && (
        <div className={classes.player}>
          <h3>{currentVideo.title}</h3>
          <video
            controls
            width="100%"
            height="400px"
            src={currentVideo.url} // URL активного видео
            title={currentVideo.title}
          ></video>
          <button className={classes.closeButton} onClick={() => setCurrentVideo(null)}>
            Закрыть
          </button>
        </div>
      )}
    </>
  );
}
<div class="ytp-cued-thumbnail-overlay-image" style="background-image: url("https://i.ytimg.com/vi/1EOtpTtBXTc/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AHOBoAC3AOKAgwIABABGEUgZShHMA8=&rs=AOn4CLB8SPJiEPiCGeOU4Zzej-vdbiEKLg");"></div>
export default Container8;
