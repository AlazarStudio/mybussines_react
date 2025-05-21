import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import classes from './Container1.module.css';

import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Container1({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <CenterBlock>
      <WidthBlock>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          // modules={[Pagination]}
       pagination={{
  clickable: true,
  renderBullet: (index, className) =>
    `<span class="${className}" style="width:10px;height:14px;margin:0 6px;background:#ed5338;border-radius:50%;display:inline-block;"></span>`,
}}

          className={classes.swiper}
        >
          {/* Slides */}
          <SwiperSlide className={classes.slide}>
            <div className={classes.slide1}>
              <img src="/images/bb1.png" />
              <div className={classes.slide1Left}>
                <span>Центр поддержки предпринимательства</span>
                <span>
                  Центр поддержки предпринимательства Карачаево-Черкесии –
                  уникальная площадка и новый формат оказания широкого комплекса
                  услуг в республике для бизнеса в режиме «одного окна».
                </span>
                <button
                  onClick={() =>
                    navigate('/centr_podderzhki_predprinimatelstva')
                  }
                >
                  Узнать больше
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <div className={classes.slide1}>
              <img src="/images/bb2.png" />
              <div className={classes.slide1Left}>
                <span>Центр поддержки экспорта</span>
                <span>
                  Центр поддержки экспорта КЧР является структурным
                  подразделением в составе Центра «Мой бизнес»
                  Карачаево-Черкесия и относится к инфраструктуре поддержки
                  малого и среднего предпринимательства.
                </span>
                <button onClick={() => navigate('/centr_podderzhki_eksporta')}>
                  Узнать больше
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <div className={classes.slide1}>
              <img src="/images/bb3.png" />
              <div className={classes.slide1Left}>
                <span>
                  Центр компетенций в сфере сельскохозяйственной кооперации и
                  поддержки фермеров
                </span>

                <button onClick={() => navigate('/centr_competencyi')}>
                  Узнать больше
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <div className={classes.slide1}>
              <img src="/images/bb4.png" />
              <div className={classes.slide1Left}>
                <span>Центр инноваций социальной сферы</span>
                <span>
                  Центр инноваций социальной сферы (ЦИСС) –
                  структурноеподразделение Центра «Мой бизнес» в
                  Карачаево-Черкесии. ЦИССявляется центром поддержки для
                  социально ориентированныхпредпринимателей всей республики.
                </span>
                <button
                  onClick={() => navigate('/center_innovacionnoy_soc_sfery')}
                >
                  Узнать больше
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <div className={classes.slide1}>
              <img src="/images/bb5.png" />
              <div className={classes.slide1Left}>
                <span>Центр молодежного инновационного творчества</span>
                <span>
                  Проект направлен на создание в г. Черкесск и в г. Карачаевске
                  Центра молодежного инновационного творчества, как открытой
                  площадки для повышения интереса молодежи (школьников и
                  студентов) к техническому творчеству, инновационной инженерной
                  и научной деятельности.
                </span>
                <button
                  onClick={() => navigate('/center_molod_innovac_texnologyi')}
                >
                  Узнать больше
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </WidthBlock>
    </CenterBlock>
  );
}

export default Container1;
