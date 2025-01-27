import React from 'react';
import classes from './Container6.module.css';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container6({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container6}>
            <span>
              Главная цель Центра – помогать предпринимателям в решении самых
              разных задач по развитию бизнеса: от поиска идеи и помощи в выборе
              правовой формы (ИП, ООО и самозанятости) до регистрации бизнеса,
              предоставления кейсов и готовых инструкций из разных сфер.
            </span>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container6;
