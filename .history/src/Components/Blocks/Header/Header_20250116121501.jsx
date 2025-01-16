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
               {/* Модальное меню */}
     <Modal
            isOpen={isMenuOpen}
            onRequestClose={closeModal} // Закрывает при клике на оверлей или Esc
            className={classes.modal}
            overlayClassName={classes.modalOverlay}
            shouldCloseOnOverlayClick={true} // Включает закрытие при клике по оверлею
            shouldCloseOnEsc={true} // Закрытие при нажатии Esc
          >
            <nav className={classes.modalNav}>
              <ul>
                <li>
                  <Link to="/" onClick={closeModal}>
                    Главная
                  </Link>
                </li>
                <li>
                  <Link to="/news" onClick={closeModal}>
                    Новости
                  </Link>
                </li>
                <li>
                  <Link to="/supports" onClick={closeModal}>
                    Меры поддержки
                  </Link>
                </li>
                <li>
                  <Link to="/service" onClick={closeModal}>
                    Услуги
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeModal}>
                    О Нас
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" onClick={closeModal}>
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link to="/base_knowledge" onClick={closeModal}>
                    База знаний
                  </Link>
                </li>
                <li>
                  <Link to="/showcases" onClick={closeModal}>
                    Витрина Предпринимателей
                  </Link>
                </li>
              </ul>
            </nav>
          </Modal>
      </WidthBlock>
    </CenterBlock>
 
    </>
  );
}

export default Header;
