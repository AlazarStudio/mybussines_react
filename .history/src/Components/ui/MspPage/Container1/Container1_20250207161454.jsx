import React from "react";
import classes from './Container1.module.css';
import CenterBlock from "../../../Standart/CenterBlock/CenterBlock";

function Container1({ children, ...props }) {
    return ( 
        <>
<div className={classes.container}>
    <div className={classes.containerTop}></div>
    <div className={classes.containerBottom}></div>
</div>
        </>
     );
}

export default Container1;