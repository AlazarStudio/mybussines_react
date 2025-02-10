import React, { useEffect, useState } from "react";
import classes from "./SupportPageAll.module.css";
import CenterBlock from "../../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../../Standart/WidthBlock/WidthBlock";
import serverConfig from "../../../../serverConfig";

export default function SupportPageAll({ activeTab }) {
  const [supports, setSupports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // 🔍 Состояние для поиска

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/supports`);
        const supportsData = await response.json();
        setSupports(supportsData);
      } catch (err) {
        console.error("Ошибка загрузки данных:", err);
        setError("Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔍 Фильтрация по вкладке (federal/regional) + поиск по названию
  const filteredSupportsType = supports
    .filter((support) => {
      if (activeTab === "federal") {
        return support.typeSupport.title === "Федеральная мера поддержки";
      }
      if (activeTab === "regional") {
        return support.typeSupport.title === "Региональная мера поддержки";
      }
      return false;
    })
    .filter((support) => 
      support.title.toLowerCase().includes(searchQuery.toLowerCase()) // Поиск
    );

  return (
    <>
      <div className={classes.back}>
        <CenterBlock>
          <WidthBlock>
            <div className={classes.containerGroup}>
              {/* 🔍 Поле ввода для поиска */}
              <input
                type="text"
                placeholder="Найти..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={classes.searchInput} // Можно стилизовать
              />
              
              <div className={classes.containerGroupContent}>
                {filteredSupportsType.length > 0 ? (
                  filteredSupportsType.map((support) => (
                    <div
                      className={classes.containerGroupContentCard}
                      key={support.id}
                    >
                      <img src={support.img[0]} alt={support.title} />
                      <span>{support.title}</span>
                      <span
                        style={{
                          background:
                            activeTab === "federal"
                              ? "#3D2A92"
                              : "#733897",
                        }}
                      >
                        Узнать больше
                      </span>
                    </div>
                  ))
                ) : (
                  <p className={classes.noResults}>Ничего не найдено</p>
                )}
              </div>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}
