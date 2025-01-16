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
                <div className={classes.containerEl}>
                    <img src='/images/cen1.png'/>
                    <span></span>
                </div>
                <div className={classes.containerEl}>
                    <img src='/images/cen2.png'/>
                    <span></span>
                </div>
                <div className={classes.containerEl}>
                    <img src='/images/cen3.png'/>
                    <span></span>
                </div>
                <div className={classes.containerEl}>
                    <img src='/images/cen4.png'/>
                    <span></span>
                </div>
            </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container2;
