import React from 'react';
import classes from './ShowCasesPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function ShowCasesPage({ children, ...props }) {
  return (
    <>
      <CenterBlock>
        <WidthBlock>
            <div className={classes.container}>
                <div className={classes.containerTop}>
                    <div className={classes.containerTopLeft}>
                        <span>ВИТРИНА ПРЕДПРИНИМАТЕЛЕЙ</span>
                        <span>Возможность привлечь новых клиентов, вывести свой проект на новый уровень⁠</span>
                        <b
                    </div>
                </div>
            </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default ShowCasesPage;
