import React, { useEffect, useState } from "react";
import classes from "./ServicePage.module.css";
import { useNavigate } from "react-router-dom";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import serverConfig from "../../../serverConfig";
import uploadsConfig from "../../../uploadsConfig";

function ServicePage({ children, ...props }) {
  const navigate = useNavigate();

  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // 🔍 Введённый текст
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(""); // 🔄 Дебаунс строка

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/supports`);
        const servicesData = await response.json();
        setService(servicesData);
      } catch (err) {
        console.error("Ошибка загрузки данных:", err);
        setError("Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ⏳ Дебаунс-функция: обновляет `debouncedSearchQuery` через 500 мс после ввода
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); // ⏳ Задержка в 500 мс

    return () => clearTimeout(handler); // 🚀 Очистка таймера при новом вводе
  }, [searchQuery]);

  // 🔍 Фильтрация списка сервисов по `debouncedSearchQuery`
  const filteredServices = service.filter((el) =>
    el.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <>
      <CenterBlock>
        <WidthBlock>
          <div className={classes.input}>
            {/* 🔍 Поле ввода с дебаунсом */}
            <input
              type="text"
              placeholder="Найти..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={classes.searchInput} // Можно стилизовать
            />
          </div>
          <div className={classes.container}>
            {filteredServices.length > 0 ? (
              filteredServices.map((el) => (
                <div className={classes.containerCard} key={el.id}>
                  <img
                    src={`${uploadsConfig}${el.img[0]}`}
                    className={classes.containerCardImg}
                    alt={el.title}
                  />
                  <img src="/images/roket.png" alt="Ракета" />
                  <img src="/images/orangeSer.png" alt="Оранжевый сервис" />
                  <div className={classes.containerCardBottom}>
                    <span>{el.title}</span>
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
                      <img src="/images/strelka.png" alt="Стрелка" />
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className={classes.noResults}>Ничего не найдено</p>
            )}
          </div>
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default ServicePage;
