import React from 'react';
import classes from './Container3.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Container3({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>Меры поддержки</div>
          <div className={classes.container}>
            <div className={classes.containerEl} onClick={() => navigate('/')}>
              <img src="/images/backRock.png" />
              <img src="/images/smilePepople1.png" />
              <div className={classes.containerEl
              }
              <span>Самозанятому</span>
            </div>
            <div className={classes.containerEl} onClick={() => navigate('/')}>
              <img src="/images/backRock.png" />
              <img src="/images/smilePepople2.png" />
              <span>Предпринимателю</span>
            </div>
            <div className={classes.containerEl} onClick={() => navigate('/')}>
              <img src="/images/backRock.png" />
              <img src="/images/smilePepople3.png" />
              <span>Для социальных</span>
              <span>предпринимателей</span>
            </div>
            <div className={classes.containerEl} onClick={() => navigate('/')}>
              <img src="/images/backRock.png" />
              <img src="/images/smilePepople4.png" />
              <span>Планирование</span>
              <span>бизнеса</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container3;
