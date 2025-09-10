import React from 'react';
import classes from './Container2.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';

function Container2({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <div className={classes.containerTitle}>
              <span>Центром компетенции оказываются следующие виды услуг:</span>
            </div>
            <div className={classes.containerBottom}>
              <div className={classes.containerBottomEl}>
                <span>01</span>
                <span>
                  оказание информационных, консультационных, методических услуг
                  субъектам МСП, СХК и ЛПХ;
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>02</span>
                <span>
                  содействие созданию на территории субъекта Российской
                  Федерации субъектов МСП, СХК;
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>03</span>
                <span>
                  предоставление услуг для повышения эффективности деятельности
                  субъектов МСП;
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>04</span>
                <span>
                  анализ и мониторинг деятельности субъектов МСП и СХК,
                  зарегистрированных в субъекте Российской Федерации.
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>05</span>

                <span>
                  участие в разработке и реализации государственных программ
                  субъекта Российской Федерации, направленных на развитие АПК,
                  государственных программ субъекта Российской Федерации,
                  направленных на развитие и поддержку малого и среднего
                  предпринимательства в АПК, сельскохозяйственной кооперации на
                  территории субъекта Российской Федерации;
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>06</span>

                <span>
                  организация систематической работы по повышению
                  информированности граждан, ведущих ЛПХ, субъектов МСП о
                  преимуществах объединения в СХК, консультированию населения по
                  вопросам создания и развития предпринимательской деятельности
                  в области сельского хозяйства, в том числе проведение
                  разъяснительных мероприятий, внедрение типовой документации;
                </span>
              </div>
              <div className={classes.containerBottomEl}>
                <span>07</span>
                <span>
                  организация сопровождения деятельности микро-, малых и средних
                  сельскохозяйственных товаропроизводителей (ветеринарное,
                  зоотехническое, агрономическое, технологическое,
                  бухгалтерское, юридическое, маркетинговое обслуживание и др.);
                </span>
              </div>
            </div>
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container2;
