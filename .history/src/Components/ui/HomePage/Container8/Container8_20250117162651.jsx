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

      url: 'https://www.youtube.com/watch?v=8duxLYROlSY&embeds_referring_euri=https%3A%2F%2Fmoibiz09.ru%2F&source_ve_path=MjM4NTE',
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
        <span>Видеоблог</span

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
          <div className="video-player" style={{ marginTop: '20px' }}>
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
