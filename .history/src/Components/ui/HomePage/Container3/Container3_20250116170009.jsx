import React from 'react';
import classes from './Container3.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container3({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>Меры поддержки</div>
          <div className={classes.container}>
            <div className={classes.containerEl} onClick={() => navigate('/')}>

            </div>
            <div className={classes.containerEl} onClick={() => navigate('/')}>

            </div>
            <div className={classes.containerEl} onClick={() => navigate('/')}>

            </div>
            <div className={classes.containerEl} onClick={() => navigate('/')}>
              <img src="/images/cen4.webp" />
              <span>Центр инноваций социальной сферы</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container3;
