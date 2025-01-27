import React from "react";
import classes from './ContactPage.module.css';

function ContactPage({ children, ...props }) {
    return ( 
        <>
           <div className={classes.container}>
            <span className={classes.containerTitle}>Контакты</span>
            <div className={classes.containerInfo}>
                <div 
            </div>
           </div>
        </>
     );
}

export default ContactPage;