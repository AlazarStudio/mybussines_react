import React, { useState } from 'react';
import classes from './Bid.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

export default function Bid() {
  const [selectedOption, setSelectedOption] = useState('');

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
                  <label>
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

            <input placeholder="ИНН* (Для проверки)"  className={classes.containerInn}/>

            <textarea
              placeholder="Введите ваш комментарий..."
              className={classes.commentInput}
            ></textarea>
            <div className={classes.containerCheck}></div></div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}
