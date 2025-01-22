import React from "react";
import classes from './NewsPage.module.css';
import {}

function NewsPage({ children, ...props }) {
    return ( 
        <>
     <div className={classes.serch}>
        <input />
        <span>Найдено: 123</span>
     </div>

        </>
     );
}

export default NewsPage;