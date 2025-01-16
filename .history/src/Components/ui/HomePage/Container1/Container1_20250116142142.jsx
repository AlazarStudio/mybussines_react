import React from "react";
import classes from './Container1.module.css';
import Swiper from "swiper";

function Container1({ children, ...props }) {
    return ( 
        <>
                      <Swiper
            className={classes.sliderBox}
            spaceBetween={70}
            slidesPerView={1}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 1, spaceBetween: 40 },
              1299: { slidesPerView: 1, spaceBetween: 70 },
            }}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[autoplay]}
            onSwiper={setSwiper4}
            onSlideChange={(swiper) => setActiveIndex4(swiper.realIndex)}
          >
            {swipeBlock1.map((el) => (
              <SwiperSlide key={el.id}>
                <div className={classes.swipe1}>
                  <img src={el.backgroundImg} alt={el.title} />
                  <div className={classes.imgSize}>
                    <img src={el.img} alt={el.title} />
                  </div>
                  <div className={classes.container1Mini}>
                    <span>{el.title}</span>
                    <span>{el.description}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
     );
}

export default Container1;