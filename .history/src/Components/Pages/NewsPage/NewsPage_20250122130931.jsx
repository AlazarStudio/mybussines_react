import React from 'react';
import classes from './NewsPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { news } from '../../../../bd';

function NewsPage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.search}>
            <input placeholder=''/>
            <span>Найдено: 123</span>
          </div>
          <div className={classes.container}>
            {news.map((el) => (
              <div className={classes.containerCard} key={el.id}>
                <img src={el.img} className={classes.containerCardImg} />
                <div className={classes.containerCardCenter}>
                  <img src="/images/newsRec.png" />
                  <span>{el.title}</span>
                </div>
                <div className={classes.containerCardBottom}>
                  <span>{el.date}</span>
                  <span
                    className={classes.readMore}
                    onClick={() =>
                      navigate(
                        `/news/${el.title
                          .replaceAll(' ', '-')
                          .replaceAll('«', '')
                          .replaceAll('»', '')}`
                      )
                    }
                  >
                    Читать дальше {'>>'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default NewsPage;
