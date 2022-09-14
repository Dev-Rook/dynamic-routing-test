import React, {useState} from "react";
import Styles from "./Styles.DataRack.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import Data from "./Data";

const DataRack = () => {

    const [cardData, setCardData] = useState(Data);

  return (
    <div className={Styles.Rack}>
      <h3 className={Styles.Rack_Title}>Data</h3>
      <Swiper
        speed={800}
        modules={[Navigation, FreeMode, Mousewheel]}
        grabCursor={true}
        loop
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        className={Styles.Swiper}
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          380: {
            width: 380,
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          480: {
            width: 480,
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1920: {
            width: 1920,
            slidesPerView: 4,
            spaceBetween: 0,
          },
          2000: {
            width: 2000,
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >
        <div className={Styles.Tray}>
          {cardData.map((slide) => {
            const { id, Name, Image, Category, Description } = slide;

            return (
              <SwiperSlide className={Styles.Slide}>
                <div className={Styles.Card} key={id}>
                 
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default DataRack;
