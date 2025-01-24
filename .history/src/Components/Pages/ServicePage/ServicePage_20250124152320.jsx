import React from "react";
import classes from './ServicePage.module.css';
import { service } from "../../../../bd";
import { useNavigate } from "react-router-dom";

function ServicePage({ children, ...props }) {
    const navigate = useNavigate()
    return ( 
        <>

        <div className={classes.input}
            <div className={classes.container}>
            {service.map((el) => (
              <div className={classes.containerCard} key={el.id}>
                <img src={el.img} className={classes.containerCardImg} />
                <img src="/images/roket.png" />
                <img src="/images/orangeSer.png" />
                <div className={classes.containerCardBottom}>
                  <span>{el.title}</span>
                  <span
                    className={classes.readMore}
                    onClick={() =>
                      navigate(
                        `/service/${el.title
                          .replaceAll(' ', '-')
                          .replaceAll('«', '')
                          .replaceAll('»', '')}`
                      )
                    }
                  >
                    <img src="/images/strelka.png" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
     );
}

export default ServicePage;