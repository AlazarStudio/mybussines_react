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
          <
          <div className={classes.container3}>
            <div className={classes.left}>
              <span >
                Поддержка потенциальных и действующих субъектов МСП с 2025 года
                продолжается в рамках федерального проекта «Малое и среднее
                предпринимательство и поддержка индивидуальной
                предпринимательской инициативы» национального проекта:
              </span>
              <div className={classes.bottom}>
                <span>«Эффективная и конкурентная экономика»</span>
                <span>в рамках которого планируется сохранить ключевые инструменты поддержки и адаптировать их с учетом актуальных задач, связанных с качественными изменениями в секторе МСП.</span>
              </div>
            </div>

            <img src="/images/aboutCon3R.png" />
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container3;
