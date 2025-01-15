import React from "react";
import classes from './Header.module.css';

function Header({ children, ...props }) {
    return ( 
        <>
            <div className={classes.container}>
                <div className={classes.containerLeft}>
                    <div className={classes.containerLeftLogo}>
                        <img src="/images/.png"/>
                    </div>
                </div>
                <div className={classes.containerRight}></div>
            </div>
        </>
     );
}

export default Header;