import React from "react";
import classes from './Container4.module.css';

function Container4({ children, ...props }) {
    return ( 
        <>
            <img src="/images/bannerSVO.webp" onClick={() => navigate('/predprinimatel')}/>
        </>
     );
}

export default Container4;