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
            d="..."
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
