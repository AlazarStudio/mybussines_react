import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';

function Header({ children, ...props }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Закрытие меню при клике вне
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerLeft}>
              <img
                src="/images/logo.png"
                className={classes.containerLeftLogo}
                alt="Logo"
              />
              <button onClick={toggleMenu} className={classes.menuButton}>
                <img src="/images/burger.png" alt="Menu" />
                Меню
              </button>
            </div>

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
                onClick={() =>
                  window.open('https://t.me/moibiz_kchr', '_blank')
                }
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
            {isMenuOpen && (
              <div className={classes.modalOverlay}>
                <div className={classes.modal} ref={menuRef}>
                  <button className={classes.closeButton} onClick={toggleMenu}>
                    ×
                  </button>
                  <nav className={classes.modalNav}>
                    <ul>
                      <li>
                        <Link to="/" onClick={toggleMenu}>
                          Главная
                        </Link>
                      </li>
                      <li>
                        <Link to="/news" onClick={toggleMenu}>
                          Новости
                        </Link>
                      </li>
                      <li>
                        <Link to="/supports" onClick={toggleMenu}>
                          Меры поддержки
                        </Link>
                      </li>
                      <li>
                        <Link to="/service" onClick={toggleMenu}>
                        Услуги
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" onClick={toggleMenu}>
                          О нас
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" onClick={toggleMenu}>
                          Услуги
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={toggleMenu}>
                          Контакты
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Header;
