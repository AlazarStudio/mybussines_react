import React from 'react';
import classes from './ContactPage.module.css';

import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function ContactPage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
            <div className=
          <div className={classes.container}>
            <span className={classes.containerTitle}>Контакты</span>
            <div className={classes.containerInfo}>
              <div className={classes.containerInfoEl}>
                <img src="/images/.png" />
                <div className={classes.containerInfoElData}>
                  <span>Наш адрес</span>
                  <span>Черкесск, проспект Ленина, 53</span>
                </div>
              </div>
              <div className={classes.containerInfoEl}>
                <img src="/images/.png" />
                <div className={classes.containerInfoElData}>
                  <span>Телефон</span>
                  <span>8 (8782) 25-02-27</span>
                </div>
              </div>
              <div className={classes.containerInfoEl}>
                <img src="/images/.png" />
                <div className={classes.containerInfoElData}>
                  <span>E-mail</span>
                  <span>reception@moibiz09.ru</span>
                </div>
              </div>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default ContactPage;
