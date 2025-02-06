import React, { useEffect, useState } from 'react';
import classes from './Svg.module.css';
import serverConfig from '../../../../serverConfig';

function Svg() {
  const [regionInfo, setRegionInfo] = useState([]);
  const [hoveredPaths, setHoveredPaths] = useState({});
  const [tooltip, setTooltip] = useState({
    visible: false,
    title: '',
    smsp: '',
    ip: '',
    ul: '',
    x: 0,
    y: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/maps`);
        const data = await response.json();

        // ✅ Создаем объект hoveredPaths динамически
        const initialHoveredPaths = data.reduce((acc, region) => {
          acc[region.title] = false;
          return acc;
        }, {});

        setRegionInfo(data);
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

    const region = regionInfo.find((r) => r.title === regionTitle);
    if (!region) return;

    setTooltip({
      visible: true,
      x: event.clientX - 150,
      y: event.clientY - 80,
      title: region.title,
      smsp: region.smsp || '',
      ip: region.ip || '',
      ul: region.ul || '',
    });
  };

  const handleMouseLeave = (regionTitle) => {
    setHoveredPaths((prev) => ({ ...prev, [regionTitle]: false }));
    setTooltip({
      visible: false,
      title: '',
      smsp: '',
      ip: '',
      ul: '',
      x: 0,
      y: 0,
    });
  };

  const getPathStyle = (regionTitle) => ({
    fill: hoveredPaths[regionTitle] ? '#ED5338' : '#FFFFFF',
    transition: 'fill 0.5s ease',
  });

  return (
    <div onMouseMove={(e) => setTooltip((prev) => ({ ...prev, x: e.clientX - 245, y: e.clientY - 160 }))}>
      {/* Тут SVG, добавляешь вызовы handleMouseEnter и handleMouseLeave, используя region.title */}
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
      )}
    </div>
  );
}

export default Svg;
