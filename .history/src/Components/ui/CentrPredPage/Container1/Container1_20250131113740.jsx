import React from "react";
import classes from './Container1.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';

function Container1({ children, ...props }) {
    return ( 
        <>
           <div className={classes.container}>
            <div className={classes.containerLeft}></div>
            <div className={classes.containerRight}></div>
           </div>
        </>
     );
}

export default Container1;