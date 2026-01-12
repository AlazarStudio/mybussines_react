import React from 'react';
import classes from './Footer.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Footer({ children, ...props }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.container100vh}>
        <CenterBlock>
          <WidthBlock>
            <div className={classes.container}>
              <div className={classes.containerTop}>
                <span onClick={() => navigate('news')}>Новости</span>
                <span onClick={() => navigate('/supports')}>
                  Меры поддержки
                </span>
                <span onClick={() => navigate('/service')}>Услуги</span>
                <span onClick={() => navigate('/about')}>О нас</span>
                <div className={classes.containerTopNumber}>
                  <a href="tel:+78782250227">8 (8782) 25-02-27</a>

                  <span>Телефон поддержки</span>
                </div>
              </div>
              <div className={classes.containerBottom}>
                <div className={classes.containerBottomLeft}>
                  <span>&copy; 2023 Мой бизнес Карачаево-Черкесия</span>
                  <a
                    href="/pologenie_ob_obrabotke_pd.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Положение об обработке Персональных данных
                  </a>
                  <a
                    href="/Pol'zovatel'skoe_soglashenie_dlya_posetitelj_sajta.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Пользовательское соглашение для посетителей сайта
                  </a>
                  <a
                    href="/polojenie_o_okazanii_platnyh_uslug.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Положение об оказании платных услуг
                  </a>
                  <a
                    href="/prikaz_10-P.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Приказ о внесении изменений в положение о платных услугах
                  </a>
                     <a
                    href="/Концепция развития ЦПП.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Концепция развития ЦПП
                  </a>
                  <a
                    href="/Устав АНО Мой бизнес.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Устав АНО Мой бизнес
                  </a>
                </div>
                <div className={classes.containerBottomRight}>
                  <div className={classes.containerBottomRightTop}>
                    <img src="/images/1_минэк.png" />
                    <img src="/images/2_деловая россия.png" />
                    <img src="/images/3_мсп.png" />
                    <img src="/images/4_опора.png" />
                    <img src="/images/5_фнс.png" />
                    <img src="/images/6_тпп.png" />
                    <a
                      href="https://t.me/moibiz_kchr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/tgb.png" />
                    </a>
                    <a
                      href="https://vk.com/moibiz_kchr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/vkb.png" />
                    </a>
                  </div>
                  <div className={classes.containerBottomRightBottom}>
                    <a
                      href="https://alazarstudio.ru/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/основной белый.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}

export default Footer;
