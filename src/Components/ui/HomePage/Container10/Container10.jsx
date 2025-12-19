import React from 'react';
import classes from './Container10.module.css';

export default function Container10() {
  return (
    <div className={classes.containerBlock}>
      <div className={classes.containerBlockEl}>
        <div className={classes.containerBlockElLeft}>
          <span className={classes.title}>Клуб самозанятых КЧР</span>
          <a
            href="/Клуб Самозанятых.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Положение клуба самозанятых КЧР</span>
          </a>
          <a href="https://chat.whatsapp.com/LHNxw8l1HF27bKSDyJMkWT">
            <span>Ссылка на группу WhatsApp</span>
          </a>
        </div>
        <img src="../images/samozanClub.jpg" />
      </div>
      <div className={classes.containerBlockEl}>
        <div className={classes.containerBlockElLeft}>
          <span className={classes.title}>Клуб деловых женщин КЧР</span>
                <a
            href="/клуб женщин.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Положение клуба деловых женщин КЧР</span>
          </a>
          <a href="https://chat.whatsapp.com/IEnAVEhY4hI1Q6kDUUpqLr">
            <span>Ссылка на группу WhatsApp</span>
          </a>
        </div>
        <img src="../images/womanClub.jpg" />
      </div>
    </div>
  );
}
