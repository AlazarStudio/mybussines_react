import React, { useEffect, useState } from "react";
import classes from "./Container7.module.css";
import { useNavigate } from "react-router-dom";
import CenterBlock from "../../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../../Standart/WidthBlock/WidthBlock";
import serverConfig from "../../../../serverConfig";
import uploadsConfig from "../../../../uploadsConfig";

function Container7() {
  const navigate = useNavigate();
  const [servicesList, setServicesList] = useState([]); // Переименовал, чтобы избежать конфликта с import service
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(null); // Состояние для hover

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/services`);
        if (!response.ok) throw new Error(`Ошибка ${response.status}`);
        
        const serviceData = await response.json();
        setServicesList(serviceData);
      } catch (err) {
        console.error("Ошибка загрузки данных:", err);
        setError("Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            <span>Популярные услуги</span>
            <button onClick={() => navigate("/service")}>Смотреть все</button>
          </div>

          {loading && <p>Загрузка...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className={classes.container}>
            {servicesList.map((el) => (
              <div className={classes.containerCard} key={el.id}>
                <img
                  src={`${uploadsConfig}${el.img[0]}`}
                  className={classes.containerCardImg}
                  alt="Service"
                />
                <img src="/images/roket.png" alt="Rocket" />
                <img src="/images/orangeSer.png" alt="Orange Background" />

                <div className={classes.containerCardBottom} >
                  <span>{el.title}123</span>
                  <span
                    className={classes.readMore}

                    onClick={() =>
                      navigate(
                        `/service/${el.title
                          .replaceAll(" ", "-")
                          .replaceAll("«", "")
                          .replaceAll("»", "")}`
                      )
                    }
                  >
                    <img
                      src={
                        hovered === el.id
                          ? "/images/Group16.svg"
                          : "/images/Group 15.svg"
                      }
                      alt="Подробнее"
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default Container7;
