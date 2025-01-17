import React, { useState } from 'react';
import classes from './Container8.module.css';
import { service } from '../../../../../bd';
import { useNavigate } from 'react-router-dom';

function Container8({ children, ...props }) {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(null); // Состояние для активного видео
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

  return (
    <>
      <div className={classes.title} link>
        <span>Видеоблог</span>

        <div
          className="video_videos__block openModalBtn"
          onClick={() =>
            window.open(
              'https://www.youtube.com/embed/1EOtpTtBXTc?si=gfUiWVuqXFpH4krr',
              '_blank'
            )
          }
        >
          123123231
        </div>

        <button onClick={() => navigate('/video')}>Смотреть все</button>
      </div>
      <div className={classes.container}>
        {service.map((el) => (
          <div className={classes.containerCard} key={el.id}>
            <img src={el.img} className={classes.containerCardImg} />
            <img src="/images/roket.png" />
            <div className={classes.containerCardBottom}>
              <span>{el.title}</span>
              <span
                className={classes.readMore}
                onClick={() =>
                  navigate(
                    `/service/${el.title
                      .replaceAll(' ', '-')
                      .replaceAll('«', '')
                      .replaceAll('»', '')}`
                  )
                }
              >
                <img src="/images/strelka.png" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Container8;
