import React, { useState } from 'react';
import classes from './Container8.module.css';
import { service } from '../../../../../bd';
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
    {videos.map((el) =)}
    </>
  );
}

export default Container8;
