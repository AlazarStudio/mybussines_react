import React, { useState } from 'react';
import classes from './Container8.module.css';
import { useNavigate } from 'react-router-dom';
import { videos } from '../../../../../bd';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container8({ children, ...props }) {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(null); // Состояние для активного видео

  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            <span>Видеоблог</span>
            <button onClick={() => navigate('/video')}>Смотреть все</button>
          </div>

          <div className={classes.container}>
            {videos.map((el) => (
              <div className={classes.containerCard} key={el.id}>
                <img src={el.img} />
                <span>{el.date}</span>
                <span>{el.title}</span>
              </div>
            ))}
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container8;
