import React from 'react';
import classes from './Container8.module.css';
import { service } from '../../../../../bd';
import { useNavigate } from 'react-router-dom';

function Container8({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.title}>
        <span>Видеоблог</span>

        <div className="videoContainer">
          <iframe
            className="videoElement"
            width="800"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
