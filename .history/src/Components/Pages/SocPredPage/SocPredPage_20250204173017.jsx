import React from "react";
import classes from './SocPredPage.module.css';

function SocPredPage({ children, ...props }) {
    const navigate = useNavigate();
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
                  <img src={el.img[0]} className={classes.containerCardImg} />
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
export default SocPredPage;