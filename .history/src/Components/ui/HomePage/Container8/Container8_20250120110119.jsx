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

      <div class="ytp-cued-thumbnail-overlay-image" style="background-image: url("https://i.ytimg.com/vi/1EOtpTtBXTc/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AHOBoAC3AOKAgwIABABGEUgZShHMA8=&rs=AOn4CLB8SPJiEPiCGeOU4Zzej-vdbiEKLg");"></div>
       
    </>
  );
}

export default Container8;
