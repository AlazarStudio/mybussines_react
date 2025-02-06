import React, { useEffect, useState } from 'react';
import classes from './SamozanPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import { useNavigate } from 'react-router-dom';
// import { supports } from '../../../../bd';
import Bid from '../../ui/Bid/Bid';
import serverConfig from '../../../serverConfig';
import uploadsConfig from '../../../uploadsConfig';


function SamozanPage({ children, ...props }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  
    const [supports, setSupports] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`${serverConfig}/supports`);
          const supportsData = await response.json();
  
          // ✅ Фильтруем только
          const filteredSupports = supportsData.filter((support) =>
            support.tags?.some((tag) => tag.title === 'Самозанятому')
          );
  
          setSupports(filteredSupports);
        } catch (err) {
          console.error('Ошибка загрузки данных:', err);
          setError('Ошибка загрузки данных');
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    // const handlePageClick = (data) => {
    //   setCurrentPage(data.selected);
    // };
    // console.log(123, news);
    // const offset = currentPage * itemsPerPage;
    // const currentNews = news.slice(offset, offset + itemsPerPage);
  
    // const handleNewsClick = (id) => {
    //   navigate(`/news/${id}`); // Перенаправляем на страницу с деталями новости
    // };
  return (
    <>
      <div className={classes.containerTop}>
        {/* <img src="/images/samozan1.png" className={classes.img1} /> */}
        <CenterBlock>
          <WidthBlock>
            <div className={classes.container}>
              {' '}
              <div className={classes.containerText}>
                <span>КАК СТАТЬ САМОЗАНЯТЫМ</span>
                <span>Построить бизнес просто — стань самозанятым</span>
                <button onClick={() => navigate('/contacts#bid')}>
                  Записаться на консультацию
                </button>
              </div>
              <img src="/images/samozan2.png" />
            </div>
          </WidthBlock>
        </CenterBlock>
      </div>

      <CenterBlock>
        <WidthBlock>
          <div className={classes.title}>
            <span>Меры поддержки</span>
          </div>
          <div className={classes.container1}>
            {supports.map((el) => (
              <div className={classes.containerCard} key={el.id}>
                <img src={`${uploadsConfig}${el.img[0]}`} className={classes.containerCardImg} />
                <img src="/images/roket.png" />
                <img src="/images/orangeSer.png" />
                <div className={classes.containerCardBottom}>
                  <span>{el.title}</span>
                  <span
                    className={classes.readMore}
                    onClick={() =>
                      navigate(
                        `/service/${el.title
                          .replaceAll(' ', '-')
                          .replaceAll('«', '')
                          .replaceAll('»', '')}`
                      )
                    }
                  >
                    <img src="/images/strelka.png" />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Bid />
        </WidthBlock>
      </CenterBlock>
    </>
  );
}

export default SamozanPage;
