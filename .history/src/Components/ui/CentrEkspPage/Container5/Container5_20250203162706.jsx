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
                – Навигатор РЭЦ по барьерам и ограничениям
              </span>
              <span>
                <a href="http://www.ved.gov.ru/rus_export/">
                  http://www.ved.gov.ru/rus_export/
                </a>{' '}
                – Охрана интеллектуальной собственности за рубежом
              </span>
              <span>
                <a href="https://www.exportcenter.ru/">
                  https://www.exportcenter.ru/
                </a>{' '}
                – Электронные торговые площадки
              </span>
              <span>
                <a href="http://www.rusexporter.ru/export-basics/documents">
                  http://www.rusexporter.ru/export-basics/documents
                </a>{' '}
                – Документооборот экспортной деятельности (в т.ч. англоязычные
                шаблоны писем-предложений, контракта, упаковочного листа,
                инвойса, а также основной пакет документов для ведения
                экспортной деятельности)
              </span>
              <span>
                <a href="http://www.rusexporter.ru/research/ ">
                  http://www.rusexporter.ru/research/
                </a>{' '}
                – Отраслевая аналитика (Экспортеры России)
              </span>
            </div>
            <div className={classes.containerRight}>
            <span>
                <a href="http://www.rusexporter.ru/industry/">
                http://www.rusexporter.ru/industry/
                </a>{' '}
                – Отраслевая аналитика-2 (Экспортеры России)
              </span>
              <span>
                <a href="https://www.exportcenter.ru/services/">
                  https://www.exportcenter.ru/services/
                </a>{' '}
                – Электронные торговые площадки
              </span>
              <span>
                <a href="https://www.exportcenter.ru/">
                  https://www.exportcenter.ru/
                </a>{' '}
                – Электронные торговые площадки
              </span>
              <span>
                <a href="https://www.exportcenter.ru/">
                  https://www.exportcenter.ru/
                </a>{' '}
                – Электронные торговые площадки
              </span>
              <span>
                <a href="https://www.exportcenter.ru/">
                  https://www.exportcenter.ru/
                </a>{' '}
                – Электронные торговые площадки
              </span>
              <span>
                <a href="https://www.exportcenter.ru/">
                  https://www.exportcenter.ru/
                </a>{' '}
                – Электронные торговые площадки
              </span>
              <span>
                <a href="https://www.exportcenter.ru/">
                  https://www.exportcenter.ru/
                </a>{' '}
                – Электронные торговые площадки
              </span>
              <span>
                <a href="https://www.exportcenter.ru/">
                  https://www.exportcenter.ru/
                </a>{' '}
                – Электронные торговые площадки
              </span>
              <span>
                <a href="https://www.exportcenter.ru/">
                  https://www.exportcenter.ru/
                </a>{' '}
                – Электронные торговые площадки
              </span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container5;
