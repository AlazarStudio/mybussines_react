import React from 'react';
import classes from './Container5.module.css';
import {news} from '../../../../../bd'

function Container5({ children, ...props }) {
  return (
    <>
      <div className={classes.title}><span>Последние нов23ости</span></div>
      <div className={classes.container}>
        {news.map((el) =>
        <div className={classes.containerCard} key={el.id}>
           <img src={el.img} className={classes.containerCardImg}/>
           <div className={classes.containerCardCenter}>
            <img src='/images/newsRec.png'/>
           <span>{el.title}</span>
           </div>
           <div className={classes.containerCardBottom}>
            <span>{el.date}</span>
            <span>Читать дальше {'>>'}</span>
           </div>
        </div>
        )}
    
          
   
      </div>
    </>
  );
}

export default Container5;
