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
            <div className={classes.containerEl} onClick={() => navigate('/supportSVO')}>
              <img src="/images/backRock.png" />
              <img src="/images/png_svo11.png" />
              <span>Поддержка участников СВО</span>
            </div>
            <div className={classes.containerEl} onClick={() => navigate('/predprinimatel')}>
              <img src="/images/backRock.png" />
              <img src="/images/smilePepople2.png" />
              <span>Предпринимателю</span>
            </div>
            <div className={classes.containerEl} onClick={() => navigate('/lyogkaya_promyshlennost')}>
              <img src="/images/backRock.png" />
              <img src="/images/soc-predprinimatel.png" />
              <span>Для легкой промышленности</span>
            </div>
            <div className={classes.containerEl} onClick={() => navigate('/individualnyi_predprinimatel')}>
              <img src="/images/backRock.png" />
              <img src="/images/smilePepople4.png" />
              <span>Планирование бизнеса</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container3;
