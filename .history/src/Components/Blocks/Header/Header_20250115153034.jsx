import React from 'react';
import classes from './Header.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

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
              />
              <button>
                <img src="/images/burger.png" />
                Меню
              </button>
            </div>
            <div className={classes.containerRight}>
              <img
                src="/images/ok.png"
                onClick={() =>
                  window.open('https://ok.ru/group/70000000007896', '_blank')
                }
              />
              <img
                src="/images/tg.png"
                onClick={() =>
                  window.open('https://t.me/moibiz_kchr', '_blank')
                }
              />
              <img
                src="/images/vk.png"
                onClick={() =>
                  window.open('https://vk.com/moibiz_kchr', '_blank')
                }
              />
              <span>Горячая линия 8(800)201-32-99</span>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Header;
