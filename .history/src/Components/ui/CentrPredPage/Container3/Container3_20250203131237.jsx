import React from "react";
import classes from './Container3.module.css';

function Container3({ children, ...props }) {
    return ( 
        <>
            <div className={classes.container}>
                <img src="/images/centrPred5.png"/>
                <div className={classes.containerRight}>
                    <span>Наша цель – предоставить возможность каждому желающему жителю Карачаево-Черкесской Республики реализовать свой предпринимательский потенциал.    
                    </span>
                    <span>В задачах центра оказать необходимые меры поддержки субъектам МСП КЧР для создания и развития бизнеса.</span>
                </div>
            </div>
        </>
     );
}

export default Container3;