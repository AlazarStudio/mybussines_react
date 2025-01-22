import React from 'react';
import classes from './Container5.module.css';
import { news } from '../../../../../bd';
import { useNavigate } from 'react-router-dom';

function Container5({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.title}>
        <span>Последние новости</span>
        <button onClick={() => navigate('/news')}>Смотреть все</button>
      </div>
      <div className={classes.container}>
      {news.map((item) => (
        <Link
          key={item.id}
          to={`/news/${encodeURIComponent(
            item.title.replaceAll(' ', '-').replaceAll('«', '').replaceAll('»', '')
          )}`}
          style={{ display: 'block', marginBottom: '10px' }}
        >
          {item.title}
        </Link>
      ))}
      </div>
    </>
  );
}

export default Container5;
