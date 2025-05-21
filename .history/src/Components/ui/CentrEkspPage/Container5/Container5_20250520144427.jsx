import React from 'react';
import classes from './Container5.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container5({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.box}
          <div className={classes.title}>Полезные ссылки</div>
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
                <a href="https://www.exportcenter.ru/services/analitika-i-issledovaniya/stranovoy_otchet/">
                  https://www.exportcenter.ru/services/
                </a>{' '}
                – Страновой экспортный портфель
              </span>
              <span>
                <a href="https://www.exportcenter.ru/services/analitika-i-issledovaniya/analiticheskaya_informatsiya_po_perspektivam_rossiyskogo_eksporta/">
                https://www.exportcenter.ru/services/
                </a>{' '}
                – Перспективы несырьевого экспорта
              </span>
              <span>
                <a href="https://www.exportcenter.ru/services/analitika-i-issledovaniya/interaktivnaya_karta_s_dannymi_ob_eksporte_iz_rf/">
                https://www.exportcenter.ru/services/
                </a>{' '}
                – Аналитический портал «Экспорт регионов»
              </span>
              <span>
                <a href="https://www.exportcenter.ru/services/analitika-i-issledovaniya/informatsiya_o_torgovoy_statistike/">
                https://www.exportcenter.ru/services/
                </a>{' '}
                – Аналитика по экспорту России
              </span>
              <span>
                <a href="https://www.exportcenter.ru/services/analitika-i-issledovaniya/renking-perspektivnosti-stran/">
                https://www.exportcenter.ru/services/
                </a>{' '}
                – Ренкинг перспективности стран
              </span>
              <span>
                <a href="https://www.exportcenter.ru/services/analitika-i-issledovaniya/analiz_mirovoy_torgovli_spravka_po_tovaru/">
                https://www.exportcenter.ru/services/
                </a>{' '}
                – Анализ мировой торговли (справка по товару)
              </span>
              <span>
                <a href="https://www.exportcenter.ru/services/analitika-i-issledovaniya/makroekonomicheskie_otchety_po_stranam/">
                https://www.exportcenter.ru/services/
                </a>{' '}
                – Макроэкономические отчеты по странам
              </span>
              <span>
                <a href="https://ved.gov.ru/exportcountries#/">
                http://www.ved.gov.ru/exportcountries
                </a>{' '}
                – Перечень Торговых представительств Российской Федерации в иностранных государствах
              </span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container5;
