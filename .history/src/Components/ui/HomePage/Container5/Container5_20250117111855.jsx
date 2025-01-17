import React from 'react';
import classes from './Container5.module.css';
import {news} from '../../../../../bd'

function Container5({ children, ...props }) {
  return (
    <>
      <div className={classes.title}>Последние новости</div>
      <div className={classes.container}>
        {news.map((el) =>
        <div className={classes.containerCard} key={el.id}>
           <img src={el.img}/>
           <span>{el.title}</span>
           <div className={classes.containerCardBottom}>
            <span>{el.date}</span>
            
           </div>
        </div>
        )}
    
          
   
      </div>
    </>
  );
}

export default Container5;
