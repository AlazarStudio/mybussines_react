import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import classes from './Header.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

// Устанавливаем элемент для привязки модального окна
Modal.setAppElement('#root');

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [modalStyle, setModalStyle] = useState({ top: 0, left: 0 });
  const menuButtonRef = useRef(null);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeModal = () => {
    setMenuOpen(false);
  };

  const updateModalPosition = () => {
    if (menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setModalStyle({
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
      });
    }
  };

useEffect(() => {
  if (isMenuOpen) {
    updateModalPosition();
    window.addEventListener('resize', updateModalPosition);
    window.addEventListener('scroll', updateModalPosition); // 👈 добавляем scroll

    return () => {
      window.removeEventListener('resize', updateModalPosition);
      window.removeEventListener('scroll', updateModalPosition); // 👈 удаляем scroll
    };
  }
}, [isMenuOpen]);

  return (
    <div className={classes.line}>
    <CenterBlock>
      <WidthBlock>
        <div className={classes.container}>
          {/* Логотип и кнопка меню */}
          <div className={classes.containerLeft}>
            <img
              src="/images/logo.png"
              className={classes.containerLeftLogo}
              alt="Logo"
              onClick={() => navigate('/')}
            />
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className={classes.menuButton}
              aria-expanded={isMenuOpen}
            >
              <img src="/images/burger.png" alt="Menu" />
              Меню
            </button>

   {isMenuOpen && (
  <div
    className={classes.dropdownMenu}
    style={{
      position: 'absolute',
      // top: modalStyle.top,
      // left: modalStyle.left,
      transform: 'translateY(10px)',
      zIndex: 9999,
    }}
  >
    <nav className={classes.modalNav}>
      <ul>
        <li>
          <Link to="/" onClick={closeModal}>Главная</Link>
        </li>
        <li>
          <Link to="/news" onClick={closeModal}>Новости</Link>
        </li>
        <li>
          <Link to="/supports" onClick={closeModal}>Меры поддержки</Link>
        </li>
        <li>
          <Link to="/service" onClick={closeModal}>Услуги</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeModal}>О Нас</Link>
        </li>
        <li>
          <Link to="/contacts" onClick={closeModal}>Контакты</Link>
        </li>
        <li>
          <Link to="/base_knowledge" onClick={closeModal}>База знаний</Link>
        </li>
        <li>
          <Link to="/showcases" onClick={closeModal}>Витрина</Link>
        </li>
      </ul>
    </nav>
  </div>
)}

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
            <a href='tel: +78002013299'>Горячая линия 8(800)201-32-99</a>
          </div>
        </div>
      </WidthBlock>
    </CenterBlock>
    </div>
  );
}

export default Header;
