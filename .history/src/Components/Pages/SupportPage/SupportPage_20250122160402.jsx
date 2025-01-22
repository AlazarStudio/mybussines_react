import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import classes from './SupportPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

// Устанавливаем элемент для привязки модального окна
Modal.setAppElement('#root');

function SupportPage({ children, ...props }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [modalStyle, setModalStyle] = useState({ top: 0, left: 0 });
  const menuButtonRef = useRef(null);
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
    updateModalPosition();
    window.addEventListener('resize', updateModalPosition);
    return () => {
      window.removeEventListener('resize', updateModalPosition);
    };
  }, [isMenuOpen]);

  return (
    <div className={classes.line}>
      <CenterBlock>
        <WidthBlock>
   
        </WidthBlock>
      </CenterBlock>
    </div>
  );
}

export default SupportPage;
