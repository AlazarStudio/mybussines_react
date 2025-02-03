import React, { useState } from 'react';
import classes from './Bid.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

export default function Bid() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const handleCheckboxChange = () => {
    setIsConsentGiven((prev) => !prev);
  };

  const handleSubmit = (e) => {
    if (!isConsentGiven) {
      e.preventDefault(); // Отменяем отправку формы
      alert('Пожалуйста, дайте согласие перед отправкой формы.');
    } else {
      alert('Форма успешно отправлена!');
      // Здесь можно добавить логику для отправки данных
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { id: 'selfEmployed', label: 'Самозанятый' },
    { id: 'individualEntrepreneur', label: 'ИП' },
    { id: 'legalEntity', label: 'Юридическое лицо' },
    { id: 'individual', label: 'Физ.лицо' },
  ];

  return (
    <>
      <CenterBlock>
        <WidthBlock>
        <div className={classes.bidTitle}>
            Если у Вас остались вопросы, оставьте заявку, мы свяжемся с Вами!
          </div>
          <div className={classes.all}>
            <div className={classes.container}>
              <span className={classes.containerTitle}>Оставить заявку</span>
              <div className={classes.containerInput}>
                <input placeholder="ФИО*" />
                <input placeholder="Телефон*" />
                <input placeholder="E-mail*" />
              </div>
              <span className={classes.containerForm}>
                Организационно-правовая форма*
              </span>
              <div className={classes.containerOrg}>
                {options.map((option) => (
                  <div key={option.id} className={classes.containerOrgEl}>
                    <label className={classes.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={selectedOption === option.id}
                        onChange={() => handleOptionChange(option.id)}
                      />
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>

              <input
                placeholder="ИНН* (Для проверки)"
                className={classes.containerInn}
              />

              <textarea
                placeholder="Комментарий"
                className={classes.commentInput}
              ></textarea>
              <div className={classes.containerCheck}>
                <input
                  type="checkbox"
                  checked={isConsentGiven}
                  onChange={handleCheckboxChange}
                />
                <label>
                  <span>
                    Отправляя форму, я даю согласие на обработку персональных
                    данных, подтверждаю согласие с политикой конфиденциальности
                    и условиями договора-оферты на оказание комплексных услуг, а
                    также на получение информационных рассылок от проекта и
                    партнеров проекта.
                  </span>
                </label>
              </div>
              <button type="submit" className={classes.submitButton}>
                Отправить заявку
              </button>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}
