import React from 'react';
import classes from './Container5.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container5({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <span>
              Как войти в реестр социальных предпринимателей подробная иструкция
            </span>
            <span>
              Социальное предпринимательство — это бизнес, который нацелен на
              решение социальных задач: помощь людям, забота об экологии, уход
              за тяжелобольными людьми, предоставление работы инвалидам,
              сиротам, пенсионерам, беженцам. А также деятельность частных
              садов, образовательных центров дошкольного и дополнительного
              образования, спортивных секций, детских лагерей,
              культурно-просветительской работы, частных музеев и др.
            </span>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container5;
