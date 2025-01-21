import React from "react";
import classes from './Footer.module.css';

function Footer({ children, ...props }) {
    return ( 
        <>
           <div className={classes.container100vh}></div>
        </>
     );
}

export default Footer;