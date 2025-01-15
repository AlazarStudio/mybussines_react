import React from "react";
import classes from './Header.module.css';

function Header({ children, ...props }) {
    return ( 
        <>
            <div className={classes.container}>
                <div className={classes.containerLeft}></div>
                <div className={classes.containerLeft}></div>
            </div>
        </>
     );
}

export default Header;