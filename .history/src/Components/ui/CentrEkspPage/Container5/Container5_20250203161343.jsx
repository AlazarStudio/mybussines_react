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
              <p>
                <span>
                  <a href="https://www.alta.ru/tnved">https://www.alta.ru/tnved</a>
                  https://www.alta.ru/tnved – определение кода ТН ВЭД
https://www.alta.ru/taksa-online – поиск разрешительных требований при вывозе товаров из РФ, вывозные таможенные пошлины
http://regionstat.exportcenter.ru/regions/map — Аналитический портал «Экспорт регионов» – стат. данные по экспорту продукции из регионов РФ
http://www.tks.ru/db/predecision – классификационные решения по кодам ТН ВЭД
https://exportedu.ru — Образовательный проект АО «РЭЦ»
http://www.rusexporter.ru/export-basics/guide — Пошаговое руководство экспортера (Экспортеры России)
https://www.exportcenter.ru/international_markets/navigation — Навигатор РЭЦ по барьерам и ограничениям
http://www.ved.gov.ru/rus_export/protection/useful_materials — Охрана интеллектуальной собственности за рубежом
https://www.exportcenter.ru/international_markets/ecommerce — Электронные торговые площадки
http://www.rusexporter.ru/export-basics/documents — Документооборот экспортной деятельности (в т.ч. англоязычные шаблоны писем-предложений, контракта, упаковочного листа, инвойса, а также основной пакет документов для ведения экспортной деятельности)
http://www.rusexporter.ru/research/industry — Отраслевая аналитика (Экспортеры России)
                </span>
              </p>
            </div>
            <div className={classes.containerRight}></div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container5;
