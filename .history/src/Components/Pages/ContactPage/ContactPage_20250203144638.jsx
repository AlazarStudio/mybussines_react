import React from 'react';
import classes from './ContactPage.module.css';

import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import Bid from '../../ui/Bid/Bid';

function ContactPage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.containerPage}>
            <div className={classes.container}>
              <span className={classes.containerTitle}>Контакты</span>
              <div className={classes.containerInfo}>
                <div className={classes.containerInfoEl}>
                  <img src="/images/cont1.png" alt="Наш адрес" />
                  <div className={classes.containerInfoElData}>
                    <span>Наш адрес</span>
                    <span>Черкесск, проспект Ленина, 53</span>
                  </div>
                </div>
                <div className={classes.containerInfoEl}>
                  <img src="/images/cont2.png" alt="Телефон" />
                  <div className={classes.containerInfoElData}>
                    <span>Телефон</span>
                    <span>8 (8782) 25-02-27</span>
                  </div>
                </div>
                <div className={classes.containerInfoEl}>
                  <img src="/images/cont3.png" alt="E-mail" />
                  <div className={classes.containerInfoElData}>
                    <span>E-mail</span>
                    <span>reception@moibiz09.ru</span>
                  </div>
                </div>
              </div>
              <span className={classes.containerWork}>Режим работы</span>
              <div className={classes.containerShedule}>
                <span>ПН­-ПТ</span>
                <span>09:00</span>
                <span>18:00</span>
                <span>СБ-ВС</span>
                <span>Выходной</span>
              </div>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>

      <div
        className={classes.map}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <a
          href="https://yandex.ru/maps/1104/cherkessk/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: '#eee',
            fontSize: '12px',
            position: 'absolute',
            top: '0px',
          }}
        >
          Черкесск
        </a>
        <a
          href="https://yandex.ru/maps/1104/cherkessk/house/prospekt_lenina_53/YEsYdgNmT0AEQFpufX5zcn1lbA==/?ll=42.046653%2C44.223168&utm_medium=mapframe&utm_source=maps&z=15.84"
          style={{
            color: '#eee',
            fontSize: '12px',
            position: 'absolute',
            top: '14px',
            outline: 'none',
          }}
        >
          Яндекс Карты — транспорт, навигация, поиск мест
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=42.046653%2C44.223168&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTAxOTAyNjk2En_QoNC-0YHRgdC40Y8sINCa0LDRgNCw0YfQsNC10LLQvi3Qp9C10YDQutC10YHRgdC60LDRjyDQoNC10YHQv9GD0LHQu9C40LrQsCwg0KfQtdGA0LrQtdGB0YHQuiwg0L_RgNC-0YHQv9C10LrRgiDQm9C10L3QuNC90LAsIDUzIgoNxS8oQhWG5DBC&z=15.84"
          width="100%"
          height="500"
          frameBorder="1"
          allowFullScreen
          style={{ position: 'relative' }}
        ></iframe>
      </div>

      <CenterBlock>
        <WidthBlock>
          <Bid />
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default ContactPage;
