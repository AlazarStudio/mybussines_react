import React from "react";
import classes from './Container3.module.css';

function Container3({ children, ...props }) {
    return ( 
        <>
            <div className={classes.container}></div>
        </>
     );
}

export default Container3;