import React from 'react';
import classes from './Container7.module.css';
import { useNavigate } from 'react-router-dom';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container7({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container7}>
            <div className={classes.container7Title}>
              <span>Структура и руководство Центра «Мой бизнес»</span>
            </div>
            <div className={classes.sotr}>
              <div className={classes.container7Card}>
                <img src="/images/about1.png" />
                <span>Хубиева Диана Казимовна</span>
                <span>Директор</span>
                <span>d.khubieva@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/about4.png" />
                <span>Урусов Салых Манафович</span>
                <span>Заместитель директора</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
            </div>
                        <div className={classes.container7Title}>
              <span>Финансовый отдел</span>
            </div>
            <div className={classes.container7Sotr}>
              <div className={classes.container7Card}>
                <img src="/images/about4.png" />
                <span>Урусов Салых Манафович</span>
                <span>Начальник центра поддержки предпринимательства</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/about5.png" />
                <span>Унежева Диана Владимировна</span>
                <span>
                  Заместитель начальника центра поддержки предпринимательства
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>

            </div>
            <div className={classes.container7Sotr}>
              <div className={classes.container7Card}>
                <img src="/images/about2.png" />
                <span>Стабровская Марина Владимировна</span>
                <span>Главный специалист финансового отдела</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/about3.png" />
                <span>Астахов Владислав Андреевич</span>
                <span>Инженер-программист</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
            </div>
            <div className={classes.container7Title}>
              <span>Центр поддержки предпринимательства</span>
            </div>
            <div className={classes.container7Sotr}>
              <div className={classes.container7Card}>
                <img src="/images/about4.png" />
                <span>Урусов Салых Манафович</span>
                <span>Начальник центра поддержки предпринимательства</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/about5.png" />
                <span>Унежева Диана Владимировна</span>
                <span>
                  Заместитель начальника центра поддержки предпринимательства
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/about6.png" />
                <span>Гербекова Эстелла Мухаджировна</span>
                <span>
                  Главный специалист центра поддержки предпринимательства
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/about7.png" />
                <span>Пазова Амина Рашидовна</span>
                <span>
                  Ведущий специалист центра поддержки предпринимательства
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
            </div>
            <div className={classes.container7Button}>
              {' '}
              <span
                onClick={() => navigate('/centr_podderzhki_predprinimatelstva')}
              >
                Подробнее
              </span>
            </div>
            <div className={classes.container7Title}>
              <span>Центр поддержки экспорта</span>
            </div>
            <div className={classes.container7Sotr}>
              <div className={classes.container7Card}>
                <img src="/images/about8.jfif" />
                <span>Ксалов Мурат Валерьевич</span>
                <span>Начальник центра поддержки экспорта</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/about9.png" />
                <span>Перова Анастасия Геннадьевна</span>
                <span>Заместитель начальника центра поддержки экспорта</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/about10.png" />
                <span>Тамбиева Амина Джетуловна</span>
                <span>Главный специалист центра поддержки экспорта</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
            </div>
            <div className={classes.container7Button}>
              {' '}
              <span onClick={() => navigate('/centr_podderzhki_eksporta')}>
                Подробнее
              </span>
            </div>
            <div className={classes.container7Title}>
              <span>Центр инноваций социальной сферы</span>
            </div>
            <div className={classes.container7Sotr}>
              <div className={classes.container7Card}>
                <img src="/images/about11.png" />
                <span>Карасова Джамиля Иссаевна</span>
                <span>Начальник центра инноваций социальной сферы</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/about12.png" />
                <span>Горельцева Наталья Павловна</span>
                <span>
                  Ведущий специалист центра инноваций социальной сферы
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
            </div>
            <div className={classes.container7Button}>
              {' '}
              <span onClick={() => navigate('/center_innovacionnoy_soc_sfery')}>
                Подробнее
              </span>
            </div>
            <div className={classes.container7Title}>
              <span>
                Центр компетенций в сфере сельскохозяйственной кооперации и
                поддержки фермеров
              </span>
            </div>
            <div className={classes.container7Sotr}>
              <div className={classes.container7Card}>
                <img src="/images/about13.png" />
                <span>Митиани Халимат Хасановна</span>
                <span>
                  Начальник центра компетенций в сфере сельскохозяйственной
                  кооперации и поддержки фермеров
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/about14.png" />
                <span>Текеева Зухра Ансаровна</span>
                <span>
                  Главный специалист центра компетенций в сфере
                  сельскохозяйственной кооперации и поддержки фермеров
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
            </div>
            <div className={classes.container7Button}>
              {' '}
              <span onClick={() => navigate('/centr_competencyi')}>
                Подробнее
              </span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container7;
