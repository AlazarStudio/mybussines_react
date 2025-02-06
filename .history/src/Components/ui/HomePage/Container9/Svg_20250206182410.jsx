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
           d="M8203.83 1264.34c-33.79,40.22 -48.75,85.29 -51.31,139.07 -2.02,42.33 7.74,98.55 -0.27,137.58 -5.53,26.95 -18.51,47.81 -23.57,73.59 -6.74,34.4 -1.86,70.49 -3.61,105.42 -1.91,38.02 -6,60.82 -21.31,95.05 -7.16,16.01 -9.8,32.66 -10.65,49.66 34.09,-6.36 60.67,-17.24 103.42,-12.66 24.76,2.65 66.33,7.25 74.81,31.87 2.94,0.33 6.1,0.61 9.32,0.84l0.32 -142.46 526.73 -33.37 2.4 0.25c44.52,4.73 84.95,21.61 128.62,27.65l47.89 -96.79c-31.91,-48.79 -54.89,-98.02 -80.75,-150.7 -17.03,-34.68 -37.27,-74.75 -70.24,-96.94 -12.12,-8.18 -50.11,-27.53 -58.62,-35.94 -10.2,-10.06 -27.18,-52.87 -34.47,-67.91l-76.4 -128.96c-36.16,46.77 -78.74,87.94 -113.55,136.84 8.23,9.1 14.09,12.22 25.72,26.23l0.61 0.74 60.48 83.73 -29.51 15.12c-17.7,9.08 -28.2,10.25 -45.48,15.08 -6.62,3.59 -11.61,5.22 -17.47,6.82 -3.48,28.79 -1.28,108.33 -1.36,127.2l-0.15 30.26 -30.2 -1.98c-47.09,-3.1 -78.98,-18.87 -106.99,-56.46 -26.64,-35.77 -47.52,-79.41 -73.75,-117.08 -27.52,-39.54 -52.48,-84.94 -81.25,-122.55 -15.05,-19.69 -28.66,-31.62 -49.41,-39.17z"
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
