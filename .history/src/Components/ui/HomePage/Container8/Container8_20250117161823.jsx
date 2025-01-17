import React from 'react';
import classes from './Container8.module.css';
import { service } from '../../../../../bd';
import { useNavigate } from 'react-router-dom';

function Container8({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.title} link>
        <span>Видеоблог</span>

        <div
          className="video_videos__block openModalBtn"
          link="https://www.youtube.com/embed/1EOtpTtBXTc?si=gfUiWVuqXFpH4krr"
        >
          …
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
