import React from 'react';
import classes from './Container5.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container5({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>Полезные ссылки для экспортера</div>
          <div className={classes.container}>
            <div className={classes.containerLeft}>
              <span>
                <a href="https://www.alta.ru/tnved">
                  https://www.alta.ru/tnved
                </a>{' '}
                – определение кода ТН ВЭД
              </span>
              <span>
                <a href="https://www.alta.ru/taksa-online">
                  https://www.alta.ru/taksa-online
                </a>{' '}
                – поиск разрешительных требований при вывозе товаров из РФ,
                вывозные таможенные пошлины
              </span>
              <span>
                <a href="http://regionstat.exportcenter.ru/">
                  http://regionstat.exportcenter.ru/
                </a>{' '}
                - Аналитический портал «Экспорт регионов» – стат. данные по
                экспорту продукции из регионов РФ
              </span>
              <span>
                <a href="http://www.tks.ru/db/predecision">
                  http://www.tks.ru/db/predecision
                </a>{' '}
                – классификационные решения по кодам ТН ВЭД
              </span>
              <span>
                <a href="https://exportedu.ru">https://exportedu.ru</a> –
                Образовательный проект АО «РЭЦ»
              </span>
              <span>
                <a href="http://www.rusexporter.ru/export-basics/guide">
                  http://www.rusexporter.ru/export-basics/guide
                </a>{' '}
                – Пошаговое руководство экспортера (Экспортеры России)
              </span>
              <span>
                <a href="https://www.exportcenter.ru/">
                  https://www.exportcenter.ru/
                </a>{' '}
                – поиск разрешительных требований при вывозе товаров из РФ,
                вывозные таможенные пошлины
              </span>
              <span>
                <a href="https://www.alta.ru/taksa-online">
                  https://www.alta.ru/taksa-online
                </a>{' '}
                – поиск разрешительных требований при вывозе товаров из РФ,
                вывозные таможенные пошлины
              </span>
              <span>
                <a href="https://www.alta.ru/taksa-online">
                  https://www.alta.ru/taksa-online
                </a>{' '}
                – поиск разрешительных требований при вывозе товаров из РФ,
                вывозные таможенные пошлины
              </span>
              <span>
                <a href="https://www.alta.ru/taksa-online">
                  https://www.alta.ru/taksa-online
                </a>{' '}
                – поиск разрешительных требований при вывозе товаров из РФ,
                вывозные таможенные пошлины
              </span>
              <span>
                <a href="https://www.alta.ru/taksa-online">
                  https://www.alta.ru/taksa-online
                </a>{' '}
                – поиск разрешительных требований при вывозе товаров из РФ,
                вывозные таможенные пошлины
              </span>
            </div>
            <div className={classes.containerRight}></div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container5;
