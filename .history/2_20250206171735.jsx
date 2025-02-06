import React, { useEffect, useState } from 'react';
import classes from './Svg.module.css';
import serverConfig from '../../../../serverConfig';

function Svg() {
  const [hoveredPaths, setHoveredPaths] = useState({});
  const [regionInfo, setRegionInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 📌 Загрузка данных о районах с бэка
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/maps`);
        const data = await response.json();

        // ✅ Создаем объект `hoveredPaths` динамически
        const initialHoveredPaths = data.reduce((acc, region) => {
          acc[region.title] = false; // Используем `title` как ключ
          return acc;
        }, {});

        setHoveredPaths(initialHoveredPaths);
        setRegionInfo(data);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 📌 Состояние для тултипа
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: '',
    x: 0,
    y: 0,
  });

  // 📌 Наведение на регион
  const handleMouseEnter = (regionTitle, event) => {
    setHoveredPaths((prev) => ({ ...prev, [regionTitle]: true }));

    const region = regionInfo.find((r) => r.title === regionTitle);

    if (region) {
      setTooltip({
        visible: true,
        x: event.clientX - 150,
        y: event.clientY - 80,
        text: region.title,
        smsp: region.smsp || '0',
        ip: region.ip || '0',
        ul: region.ul || '0',
      });
    }
  };

  // 📌 Уход мыши с региона
  const handleMouseLeave = (regionTitle) => {
    setHoveredPaths((prev) => ({ ...prev, [regionTitle]: false }));
    setTooltip({ visible: false, x: 0, y: 0, text: '', smsp: '', ip: '', ul: '' });
  };

  // 📌 Движение мыши для тултипа
  const handleMouseMove = (e) => {
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX - 245,
      y: e.clientY - 160,
    }));
  };

  // 📌 Определяем стили для региона
  const getPathStyle = (regionTitle) => ({
    fill: hoveredPaths[regionTitle] ? '#ED5338' : '#FFFFFF',
    transition: 'fill 0.5s ease',
  });

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!regionInfo.length) return <p>Нет данных</p>;

  return (
    <div onMouseMove={handleMouseMove}>
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
        {regionInfo.map((region) => (
          <g key={region.id} id={region.title}>
            <path
              className={classes.qwe}
              style={getPathStyle(region.title)}
              onMouseEnter={(e) => handleMouseEnter(region.title, e)}
              onMouseLeave={() => handleMouseLeave(region.title)}
              d={region.svgPath} // 📌 Предполагаем, что `svgPath` есть в данных с бэка
            />
          </g>
        ))}
      </svg>

      {/* 📌 Тултип */}
      {tooltip.visible && (
        <div
          style={{
            position: 'absolute',
            top: tooltip.y,
            left: tooltip.x,
            backgroundColor: '#fff',
            padding: '8px',
            borderRadius: '4px',
            boxShadow: '0 0 5px rgba(0,0,0,0.2)',
          }}
        >
          <strong>{tooltip.text}</strong>
          <p>СМСП: {tooltip.smsp}</p>
          <p>ИП: {tooltip.ip}</p>
          <p>ЮЛ: {tooltip.ul}</p>
        </div>
      )}
    </div>
  );
}

export default Svg;
