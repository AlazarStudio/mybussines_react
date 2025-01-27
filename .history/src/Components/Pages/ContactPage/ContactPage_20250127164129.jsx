import React from "react";
import classes from './ContactPage.module.css';

function ContactPage({ children, ...props }) {
    return ( 
        <>
           <div className={classes.container}>
            <span className={classes.containerTitle}>Контакты</span>
            <div className={classes.containerInfo}>
                <div className={classes.containerInfoEl}>
                    <img src="/images/.png"/>
                    <div className={classes.containerInfoEl}
                </div>
            </div>
           </div>
        </>
     );
}

export default ContactPage;