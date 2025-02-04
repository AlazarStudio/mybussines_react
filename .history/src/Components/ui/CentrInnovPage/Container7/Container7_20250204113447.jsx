import React from 'react';
import classes from './Container7.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container7({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerTitle}>
              <span>
                Существует 4 категории социального предпринимательства, по
                которым вы сможете определить социальную направленность вашего
                бизнеса:
              </span>
            </div>
            <div className={classes.containerBlock}>
              <div className={classes.containerBlockEl}>
                <span>Категория 1. Трудоустройство</span>
                <span>
                  К этой категории относятся предприниматели, трудоустраивающие
                  у себя людей, которые относятся к социально незащищенным
                  категориям граждан (пенсионеры, предпенсионеры, люди с
                  инвалидностью и ОВЗ, многодетные и одинокие родители,
                  малоимущие граждане, беженцы, выпускники детских домов и др.)
                </span>
                <span>Условия:</span>
                <span className={classes.tr}>
                  <img src="/images/tr.png" />
                  <span>
                    В 2023 году среднесписочная численность работников,
                    относящихся к социально уязвимым категориям граждан,
                    составила не менее 50% от общей численности, но при этом не
                    менее двух человек
                  </span>{' '}
                </span>
                <span className={classes.tr}>
                  <img src="/images/tr.png" />
                  <span>
                    В 2023 году доля расходов на оплату труда таких лиц
                    составила не менее 25% от общего фонда оплаты труда
                  </span>{' '}
                </span>
                <span>Перечень документов для 1 категории:</span>
                <a href="/prilozhenie-1.rtf" download="prilozhenie-1.rtf">
                  Заявление Приложение 1
                </a>
                <a href="/prilozhenie-2.rtf" download="prilozhenie-2.rtf">
                  Отчет о социальном воздействии Приложение 2
                </a>
                <a href="/prilozhenie-6.docx" download="prilozhenie-6.docx">
                  Справка о доле доходов, полученных от осуществления
                  деятельности (видов деятельности), указанной в пунктах 2,3 или
                  4 части 1 статьи 24.1 ФЗ от 24.07.2007г. №209-ФЗ «О развитии
                  малого и среднего предпринимательства в РФ» Приложение 6
                </a>
                <a href="/prilozhenie-7.docx" download="prilozhenie-6.docx">
                  Отчет о социальном воздействии Приложение 2
                </a>
              </div>
              <div className={classes.containerBlockEl}>2</div>
              <div className={classes.containerBlockEl}>3</div>
              <div className={classes.containerBlockEl}>4</div>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container7;
