import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Bid.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

export default function Bid() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    form: '',
    inn: '',
    comment: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#bid') {
      const element = document.getElementById('bid');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const options = [
    { id: 'selfEmployed', label: 'Самозанятый' },
    { id: 'individualEntrepreneur', label: 'ИП' },
    { id: 'legalEntity', label: 'Юридическое лицо' },
    { id: 'individual', label: 'Физ.лицо' },
  ];

  // Обновление полей
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Обновление radio-кнопки
  const handleOptionChange = (label) => {
    setFormData((prev) => ({
      ...prev,
      form: label, // Записываем русское название
    }));
  };
  

  // Отправка формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('Пожалуйста, дайте согласие перед отправкой формы.');
      return;
    }

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.form ||
      !formData.inn
    ) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/api/bids', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке формы.');
      }

      alert('За успешно отправлена!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        form: '',
        inn: '',
        comment: '',
        consent: false,
      });
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка при отправке формы.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.bidTitle} id="bid">
          Если у Вас остались вопросы, оставьте заявку, мы свяжемся с Вами!
        </div>
        <form className={classes.all} onSubmit={handleSubmit}>
          <div className={classes.container}>
            <span className={classes.containerTitle}>Оставить заявку</span>

            {/* Поля ввода */}
            <div className={classes.containerInput}>
              <input
                name="name"
                placeholder="ФИО*"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                placeholder="Телефон*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Выбор организационно-правовой формы */}
            <span className={classes.containerForm}>
              Организационно-правовая форма*
            </span>
            <div className={classes.containerOrg}>
              {options.map((option) => (
                <div key={option.id} className={classes.containerOrgEl}>
                  <label className={classes.checkboxLabel}>
                    <input
                      type="radio"
                      name="form"
                      value={option.label} // Сохраняем русское слово в `value`
                      checked={formData.form === option.label} // Сравниваем с `label`
                      onChange={() => handleOptionChange(option.label)} // Передаем `label`
                      required
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </div>

            {/* Поле ИНН */}
            <input
              name="inn"
              placeholder="ИНН* (Для проверки)"
              className={classes.containerInn}
              value={formData.inn}
              onChange={handleChange}
              required
            />

            {/* Комментарий */}
            <textarea
              name="comment"
              placeholder="Комментарий"
              className={classes.commentInput}
              value={formData.comment}
              onChange={handleChange}
            ></textarea>

            {/* Согласие на обработку данных */}
            <div className={classes.containerCheck}>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <label>
                <span>
                  Отправляя форму, я даю согласие на обработку персональных
                  данных, подтверждаю согласие с политикой конфиденциальности и
                  условиями договора-оферты.
                </span>
              </label>
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              className={classes.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </button>
          </div>
        </form>
      </WidthBlock>
    </CenterBlock>
  );
}
