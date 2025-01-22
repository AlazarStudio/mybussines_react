import React from "react";
import classes from './NewsPage.module.css';

function NewsPage({ children, ...props }) {
    return ( 
        <>
     <div className={classes.serch}>
        <input />
        <span>Найдено:</span>
     </div>
        </>
     );
}

export default NewsPage;