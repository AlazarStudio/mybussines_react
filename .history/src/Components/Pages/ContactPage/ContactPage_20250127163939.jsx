import React from "react";
import classes from './ContactPage.module.css';

function ContactPage({ children, ...props }) {
    return ( 
        <>
           <div className={classes.container>}>
            <span className={classes.c}></span>
           </div>
        </>
     );
}

export default ContactPage;