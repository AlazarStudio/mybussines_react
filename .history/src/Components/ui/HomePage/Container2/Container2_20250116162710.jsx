import React from 'react';
import classes from './Container2.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container2({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
            <h2>123</h2>
            <div className={classes.container}>
                <div className={classes.containerEl}>
                    <img src='/images/cen1.webp'/>
                    <span>Центр поддержки предпринимательства</span>
                </div>
                <div className={classes.containerEl}>
                    <img src='/images/cen2.webp'/>
                    <span>Центр поддержки экспорта</span>
                </div>
                <div className={classes.containerEl}>
                    <img src='/images/cen3.webp'/>
                    <span>Центр компетенций с/х кооперации и поддержки фермеров</span>
                </div>
                <div className={classes.containerEl}>
                    <img src='/images/cen4.webp'/>
                    <span>Центр инноваций социальной сферы</span>
                </div>
            </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container2;
