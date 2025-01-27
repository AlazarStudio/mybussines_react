import React from "react";
import classes from './ContactPage.module.css';

function ContactPage({ children, ...props }) {
    return ( 
        <>
        <C
           <div className={classes.container}>
            <span className={classes.containerTitle}>Контакты</span>
            <div className={classes.containerInfo}>
                <div className={classes.containerInfoEl}>
                    <img src="/images/.png"/>
                    <div className={classes.containerInfoElData}>
                        <span>Наш адрес</span>
                        <span>Черкесск, проспект Ленина, 53</span>
                    </div>
                </div>
                <div className={classes.containerInfoEl}>
                    <img src="/images/.png"/>
                    <div className={classes.containerInfoElData}>
                        <span>Телефон</span>
                        <span>8 (8782) 25-02-27</span>
                    </div>
                </div>
                <div className={classes.containerInfoEl}>
                    <img src="/images/.png"/>
                    <div className={classes.containerInfoElData}>
                        <span>E-mail</span>
                        <span>reception@moibiz09.ru</span>
                    </div>
                </div>
            </div>
           </div>
        </>
     );
}

export default ContactPage;