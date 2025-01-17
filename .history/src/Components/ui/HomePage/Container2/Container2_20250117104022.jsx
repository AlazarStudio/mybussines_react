import React from 'react';
import classes from './Container2.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Container2({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>Центры поддержки</div>
          <div className={classes.container}>
            <div
              className={classes.containerEl}
              onClick={() => navigate('/centr_podderzhki_predprinimatelstva')}
            >
              <img src="/images/cen1.webp" />
              <span>Центр поддержки предпринимательства</span>
            </div>
            <div
              className={classes.containerEl}
              onClick={() => navigate('/centr_podderzhki_eksporta')}
            >
              <img src="/images/cen2.webp" />
              <span>Центр поддержки экспорта</span>
            </div>
            <div
              className={classes.containerEl}
              onClick={() => navigate('/centr_competencyi')}
            >
              <img src="/images/cen3.webp" />
              <span>Центр компетенций с/х кооперации и поддержки фермеров</span>
            </div>
            <div
              className={classes.containerEl}
              onClick={() => navigate('/center_innovacionnoy_soc_sfery')}
            >
              <img src="/images/cen4.webp" />
              <span>Центр инноваций социальной сферы</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container2;
