/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react';
import classes from './Svg.module.css';
import serverConfig from '../../../../serverConfig';

function Svg() {
  const [regionData, setRegionData] = useState([]);
  const [hoveredPaths, setHoveredPaths] = useState({});
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    region: null, // Здесь будем хранить данные конкретного региона
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/maps`);
        const data = await response.json();

        // ✅ Динамически создаем объект hoveredPaths
        const initialHoveredPaths = data.reduce((acc, region) => {
          acc[region.title] = false;
          return acc;
        }, {});

        setRegionData(data);
        setHoveredPaths(initialHoveredPaths);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMouseEnter = (regionTitle, event) => {
    setHoveredPaths((prev) => ({ ...prev, [regionTitle]: true }));

    // ✅ Ищем нужный регион
    const region = regionData.find((r) => r.title === regionTitle);
    if (!region) return;

    setTooltip({
      visible: true,
      x: event.clientX - 150,
      y: event.clientY - 80,
      region, // ✅ Передаем конкретный регион
    });
  };

  const handleMouseLeave = (regionTitle) => {
    setHoveredPaths((prev) => ({ ...prev, [regionTitle]: false }));
    setTooltip({
      visible: false,
      x: 0,
      y: 0,
      region: null, // ✅ Очищаем регион
    });
  };

  const handleMouseMove = (e) => {
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX - 245,
      y: e.clientY - 160,
    }));
  };

  const getPathStyle = (regionTitle) => ({
    fill: hoveredPaths[regionTitle] ? '#ED5338' : '#FFFFFF',
    transition: 'fill 0.5s ease',
  });

  return (
    <div onMouseMove={handleMouseMove}>
      {/* ✅ SVG-карта с корректными названиями */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="650px"
        height="650px"
        viewBox="0 0 13294.99 11954.78"
        style={{
          shapeRendering: 'geometricPrecision',
          textRendering: 'geometricPrecision',
          imageRendering: 'optimizeQuality',
          fillRule: 'evenodd',
          clipRule: 'evenodd',
        }}
      >
        {/* ✅ Используем динамические данные */}
        <g id="Прикубанский район">
          <path
            className={classes.qwe}
            style={getPathStyle('Прикубанский район')}
            onMouseEnter={(e) => handleMouseEnter('Прикубанский район', e)}
            onMouseLeave={() => handleMouseLeave('Прикубанский район')}
            d="M8254.95 3116.4c103.53,0.98 185.2,6.89 287.99,29.36l41.94 -36.69c134.53,-111.58 45.7,-122.33 108.25,-248.31 10.08,-20.31 32.08,-58.14 39.6,-79.52 0.49,-28.62 8.52,-56.74 15.9,-84.21 10.83,-40.33 22.19,-67.83 38.5,-105.1 7.03,-16.09 9.52,-34.67 10.52,-52.98 -153.32,2.05 -344.89,16.14 -487.92,-38.84 -0.52,2.77 -0.99,5.3 -1.48,7.32 -5.99,25.25 -16.77,45.54 -33.61,65.34 -11.42,13.41 -21.57,19.77 -35.04,22.37 0.15,13.05 1.77,30.36 2.33,37.84 6.24,84.35 13.66,166.27 13.49,251.14l-0.47 232.28z"
          />
        </g>

        <g id="Адыге-Хабльский район">
          <path
            className={classes.qwe}
            style={getPathStyle('Адыге-Хабльский район')}
            onMouseEnter={(e) => handleMouseEnter('Адыге-Хабльский район', e)}
            onMouseLeave={() => handleMouseLeave('Адыге-Хабльский район')}
            d="..."
          />
        </g>

        <g id="Черкесск">
          <path
            className={classes.qwe}
            style={getPathStyle('Черкесск')}
            onMouseEnter={(e) => handleMouseEnter('Черкесск', e)}
            onMouseLeave={() => handleMouseLeave('Черкесск')}
            d="..."
          />
        </g>
      </svg>

      {/* ✅ Правильный tooltip, показывающий данные только одного региона */}
      {tooltip.visible && tooltip.region && (
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
            <span className={classes.name}>{tooltip.region.title}</span>
            <div className={`${classes.tooltipInfoBd} ${classes.border}`}>
              <span>СМСП</span>
              <span>{tooltip.region.smsp}</span>
            </div>
            <div className={`${classes.tooltipInfoBd} ${classes.border}`}>
              <span>ИП</span>
              <span>{tooltip.region.ip}</span>
            </div>
            <div className={classes.tooltipInfoBd}>
              <span>ЮЛ</span>
              <span>{tooltip.region.ul}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Svg;
