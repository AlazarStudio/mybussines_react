import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import classes from './Header.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

// Устанавливаем элемент для привязки модального окна
Modal.setAppElement('#root');

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Переключаем состояние меню
  };

  const closeModal = () => {
    setMenuOpen(false); // Закрываем меню
  };

  return (
    <>
    <CenterBlock>
      <WidthBlock>
        <div className={classes.container}>
          {/* Логотип и кнопка меню */}
          <div className={classes.containerLeft}>
            <img
              src="/images/logo.png"
              className={classes.containerLeftLogo}
              alt="Logo"
            />
            <button
              onClick={toggleMenu}
              className={classes.menuButton}
              aria-expanded={isMenuOpen}
            >
              <img src="/images/burger.png" alt="Menu" />
              Меню
            </button>
          </div>

          {/* Социальные сети */}
          <div className={classes.containerRight}>
            <img
              src="/images/ok.png"
              alt="OK"
              onClick={() =>
                window.open('https://ok.ru/group/70000000007896', '_blank')
              }
            />
            <img
              src="/images/tg.png"
              alt="Telegram"
              onClick={() => window.open('https://t.me/moibiz_kchr', '_blank')}
            />
            <img
              src="/images/vk.png"
              alt="VK"
              onClick={() =>
                window.open('https://vk.com/moibiz_kchr', '_blank')
              }
            />
            <span>Горячая линия 8(800)201-32-99</span>
          </div>
        </div>
         
      </WidthBlock>
    </CenterBlock>
    
  );
}

export default Header;
