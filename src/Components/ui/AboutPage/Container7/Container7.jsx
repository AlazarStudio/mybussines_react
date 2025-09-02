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
            <div className={classes.container7Sotr}>
              <div className={classes.container7Card}>
                <img src="/images/hubieva11.jpg" />
                <span>Хубиева Диана Казимовна</span>
                <span>Директор</span>
                <span>d.khubieva@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/urusov11.jpg" />
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
                <img src="/images/botasheva11.jpg" />
                <span>Боташева Зухра Хасановна</span>
                <span>Главный бухгалтер</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/stabrovskaya11.jpg" />
                <span>Стабровская Марина Владимировна</span>
                <span>Главный специалист финансового отдела</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
            </div>
            <div className={classes.container7Sotr}>
              {/* <div className={classes.container7Card}>
                <img src="/images/about2.JPG" />
                <span>Стабровская Марина Владимировна</span>
                <span>Главный специалист финансового отдела</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/about3.JPG" />
                <span>Астахов Владислав Андреевич</span>
                <span>Инженер-программист</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div> */}
            </div>
            <div className={classes.container7Title}>
              <span>Центр поддержки предпринимательства</span>
            </div>
            <div className={classes.container7Sotr}>
              <div className={classes.container7Card}>
                <img src="/images/perova11.jpg" />
                <span>Перова Анастасия Геннадьевна</span>
                <span>Начальник центра поддержки предпринимательства</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              {/* <div className={classes.container7Card}>
                <img src="/images/about5.JPG" />
                <span>Унежева Диана Владимировна</span>
                <span>
                  Заместитель начальника центра поддержки предпринимательства
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div> */}
              <div className={classes.container7Card}>
                <img src="/images/gerbekova11.jpg" />
                <span>Гербекова Эстелла Мухаджировна</span>
                <span>
                  Заместитель начальника центра поддержки предпринимательства
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/kushpov11.jpg" />
                <span>Кушпов Шамиль Робертович</span>
                <span>
                  Главный специалист центра поддержки предпринимательства
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/meramova11.jpg" />
                <span>Мерамова Лиана Борисовна</span>
                <span>
                  Ведущий специалист центра поддержки предпринимательства
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              {/* <div className={classes.container7Card}>
                <img src="/images/about7.JPG" />
                <span>Пазова Амина Рашидовна</span>
                <span>
                  Ведущий специалист центра поддержки предпринимательства
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div> */}
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
              {/* <div className={classes.container7Card}>
                <img src="/images/about8.jfif" />
                <span>Ксалов Мурат Валерьевич</span>
                <span>Начальник центра поддержки экспорта</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div> */}
              {/* <div className={classes.container7Card}>
                <img src="/images/about9.JPG" />
                <span>Перова Анастасия Геннадьевна</span>
                <span>Заместитель начальника центра поддержки экспорта</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div> */}
              <div className={classes.container7Card}>
                <img src="/images/tambieva11.jpg" />
                <span>Тамбиева Амина Джетуловна</span>
                <span>Начальник центра поддержки экспорта</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              {/* <div className={classes.container7Card}>
                <img src="/images/tekeeva11.jpg" />
                <span>Текеева Зухра Ансаровна</span>
                <span>
                  Главный специалист центра компетенций в сфере
                  сельскохозяйственной кооперации и поддержки фермеров
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div> */}
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
                <img src="/images/karasova11.jpg" />
                <span>Карасова Джамиля Иссаевна</span>
                <span>Начальник центра инноваций социальной сферы</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              {/* <div className={classes.container7Card}>
                <img src="/images/podsvirova11.jpg" />
                <span>Подсвирова Наталья Павловна</span>
                <span>
                  Ведущий специалист центра инноваций социальной сферы
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div> */}
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
                <img src="/images/yarovchuk11.jpg" />
                <span>Яровчук Дарья Александровна</span>
                <span>
                  Начальник центра компетенций в сфере сельскохозяйственной
                  кооперации и поддержки фермеров
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>

              {/* <div className={classes.container7Card}>
                <img src="/images/about13.JPG" />
                <span>Митиани Халимат Хасановна</span>
                <span>
                  Начальник центра компетенций в сфере сельскохозяйственной
                  кооперации и поддержки фермеров
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div> */}
              {/* <div className={classes.container7Card}>
                <img src="/images/about14.JPG" />
                <span>Текеева Зухра Ансаровна</span>
                <span>
                  Главный специалист центра компетенций в сфере
                  сельскохозяйственной кооперации и поддержки фермеров
                </span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div> */}
            </div>
            <div className={classes.container7Button}>
              {' '}
              <span onClick={() => navigate('/centr_competencyi')}>
                Подробнее
              </span>
            </div>
            <div className={classes.container7Title}>
              <span>Юридический отдел</span>
            </div>
            <div className={classes.container7Sotr}>
              <div className={classes.container7Card}>
                <img src="/images/dyshekov11.jpg" />
                <span>Дышеков Рамазан Петрович</span>
                <span>Начальник юридического отдела</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/astahov11.jpg" />
                <span>Астахов Владислав Андреевич</span>
                <span>Главный специалист по информационной безопасности</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
            </div>

            <div className={classes.container7Title}>
              <span>Центр маркировки "Честный знак"</span>
            </div>
            <div className={classes.container7Sotr}>
              <div className={classes.container7Card}>
                <img src="/images/tekeeva11.jpg" />
                <span>Текеева Зухра Ансаровна</span>
                <span>Консультант</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
              <div className={classes.container7Card}>
                <img src="/images/podsvirova11.jpg" />
                <span>Подсвирова Наталья Павловна</span>
                <span>Консультант</span>
                <span>reception@moibiz09.ru</span>
                <span>8 (8782) 25-02-27</span>
              </div>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container7;
