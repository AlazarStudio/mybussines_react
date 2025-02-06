import React, { useEffect, useState } from 'react';
import classes from './Svg.module.css';
import serverConfig from '../../../../serverConfig';

function Svg() {
  const [regionInfo, setRegionInfo] = useState([]); // ✅ Данные приходят как массив
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/maps`);
        const data = await response.json();
        setRegionInfo(data); // ✅ Сохраняем массив
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Создаем объект для хранения состояний hover
  const [hoveredPaths, setHoveredPaths] = useState({});

  // ✅ Состояние для tooltip
  const [tooltip, setTooltip] = useState({
    visible: false,
    title: '',
    smsp: '',
    ip: '',
    ul: '',
    x: 0,
    y: 0,
  });

  // ✅ Обработчик наведения
  const handleMouseEnter = (regionTitle, event) => {
    const regionData = regionInfo.find((region) => region.title === regionTitle);

    if (!regionData) return; // Если данные не найдены, ничего не делаем

    setHoveredPaths((prev) => ({ ...prev, [regionTitle]: true }));
    setTooltip({
      visible: true,
      x: event.clientX - 150,
      y: event.clientY - 80,
      title: regionData.title,
      smsp: regionData.smsp || 0,
      ip: regionData.ip || 0,
      ul: regionData.ul || 0,
    });
  };

  // ✅ Обработчик ухода мыши
  const handleMouseLeave = (regionTitle) => {
    setHoveredPaths((prev) => ({ ...prev, [regionTitle]: false }));
    setTooltip({ visible: false, title: '', smsp: '', ip: '', ul: '', x: 0, y: 0 });
  };

  // ✅ Движение tooltip
  const handleMouseMove = (e) => {
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX - 245,
      y: e.clientY - 160,
    }));
  };

  // ✅ Функция для стилей SVG
  const getPathStyle = (regionTitle) => ({
    fill: hoveredPaths[regionTitle] ? '#ED5338' : '#FFFFFF',
    transition: 'fill 0.5s ease',
  });

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div onMouseMove={handleMouseMove}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="650px"
          height="650px"
          viewBox="0 0 13294.99 11954.78"
        >
          {/* ✅ Пример для Прикубанского района */}
          <g id="prikub">
            <path
              className={classes.qwe}
              style={getPathStyle('Прикубанский район')}
              onMouseEnter={(e) => handleMouseEnter('Прикубанский район', e)}
              onMouseLeave={() => handleMouseLeave('Прикубанский район')}
              d="M8254.95 3116.4c103.53,0.98 185.2,6.89 287.99,29.36l41.94 -36.69..."
            />
          </g>

          {/* ✅ Автоматическое создание путей SVG для каждого района */}
          {regionInfo.map((region) => (
            <g key={region.id} id={region.title}>
              <path
                className={classes.qwe}
                style={getPathStyle(region.title)}
                onMouseEnter={(e) => handleMouseEnter(region.title, e)}
                onMouseLeave={() => handleMouseLeave(region.title)}
                d={region.svgPath} // ✅ Предполагаем, что у каждого региона есть `svgPath`
              />
            </g>
          ))}
        </svg>

        {/* ✅ Tooltip */}
        {tooltip.visible && (
          <div
            className={classes.tooltip}
            style={{
              position: 'fixed',
              top: tooltip.y,
              left: tooltip.x,
              pointerEvents: 'none',
            }}
          >
            <img src="/images/raimg.png" alt="Region Icon" />
            <img src="/images/rocket1.png" alt="Rocket Icon" />
            <div className={classes.tooltipInfo}>
              <span className={classes.name}>{tooltip.title}</span>
              <div className={`${classes.tooltipInfoBd} ${classes.border}`}>
                <span>СМСП</span>
                <span>{tooltip.smsp}</span>
              </div>
              <div className={`${classes.tooltipInfoBd} ${classes.border}`}>
                <span>ИП</span>
                <span>{tooltip.ip}</span>
              </div>
              <div className={classes.tooltipInfoBd}>
                <span>ЮЛ</span>
                <span>{tooltip.ul}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Svg;
