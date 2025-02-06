import React, { useEffect, useState } from 'react';
import classes from './Container9.module.css';
import CenterBlock from '../../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../../Standart/WidthBlock/WidthBlock';
import Svg from './Svg';
import serverConfig from '../../../../serverConfig';

function Container9({ children, ...props }) {
  const [regionInfo, setRegionInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${serverConfig}/maps`);
        const data = await response.json();
        setRegionInfo(data); // ✅ Данные приходят в виде массива
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!regionInfo.length) return <p>Нет данных</p>;

  // ✅ Фильтрация регионов
  const regionsWithoutSamozan = regionInfo.filter((r) => r.title !== 'Самозанятые');
  const regionsWithoutCherkessk = regionsWithoutSamozan.filter((r) => r.title !== 'Черкесск');
  const samozanRegion = regionInfo.find((r) => r.title === 'Самозанятые');

  // ✅ Подсчет значений
  const totalIp = regionsWithoutSamozan.reduce((sum, region) => sum + Number(region.ip || 0), 0);
  const totalUl = regionsWithoutSamozan.reduce((sum, region) => sum + Number(region.ul || 0), 0);
  const totalSmsp = regionsWithoutSamozan.reduce((sum, region) => sum + Number(region.smsp || 0), 0);

  const totalIpReg = regionsWithoutCherkessk.reduce((sum, region) => sum + Number(region.ip || 0), 0);
  const totalUlReg = regionsWithoutCherkessk.reduce((sum, region) => sum + Number(region.ul || 0), 0);
  const totalSmspReg = regionsWithoutCherkessk.reduce((sum, region) => sum + Number(region.smsp || 0), 0);

  const totalSmspSamozan = Number(samozanRegion?.smsp || 0);

  return (
    <>
      <div className={classes.back}>
        <CenterBlock>
          <WidthBlock>
            <div className={classes.container}>
              <div className={classes.containerTitle}>Информация</div>
              <div className={classes.containerBottom}>
                <div className={classes.containerBottomLeft}>
                  <div className={classes.containerBottomLeftTop}>
                    <div className={classes.containerBottomLeftTitle}>
                      <img src="/images/smspob.png" alt="СМСП" />
                      <span>Общее количество СМСП</span>
                    </div>
                    <div className={classes.containerBottomLeftInfo}>
                      <div className={`${classes.containerBottomLeftInfoIp} ${classes.border}`}>
                        <span>ИП</span>
                        <span>{totalIp}</span>
                      </div>
                      <div className={`${classes.containerBottomLeftInfoIp} ${classes.border}`}>
                        <span>ЮЛ</span>
                        <span>{totalUl}</span>
                      </div>
                      <div className={classes.containerBottomLeftInfoIp}>
                        <span>СМСП</span>
                        <span>{totalSmsp}</span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.containerBottomLeftCenter}>
                    <div className={classes.containerBottomLeftTitle}>
                      <img src="/images/smsprai.png" alt="Районы" />
                      <span>Общее количество СМСП в районах</span>
                    </div>
                    <div className={classes.containerBottomLeftInfo}>
                      <div className={`${classes.containerBottomLeftInfoIp} ${classes.border}`}>
                        <span>ИП</span>
                        <span>{totalIpReg}</span>
                      </div>
                      <div className={`${classes.containerBottomLeftInfoIp} ${classes.border}`}>
                        <span>ЮЛ</span>
                        <span>{totalUlReg}</span>
                      </div>
                      <div className={classes.containerBottomLeftInfoIp}>
                        <span>СМСП</span>
                        <span>{totalSmspReg}</span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.containerBottomLeftBottom}>
                    <div className={classes.containerBottomLeftTitle}>
                      <img src="/images/samozan.png" alt="Самозанятые" />
                      <span>Общее количество самозанятых</span>
                    </div>
                    <div className={classes.containerBottomLeftInfo}>
                      <div className={classes.containerBottomLeftInfoIp}>
                        <span>Самозанятые</span>
                        <span>{totalSmspSamozan}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.containerBottomRight}>
                  <Svg regionInfo />
                </div>
              </div>
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>
    </>
  );
}

export default Container9;
