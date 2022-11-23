import React  from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../Styles/Product.css";

// import required modules
import { Keyboard, Scrollbar, Navigation } from "swiper";


const Product = () => {
//  const {title,subtitle}=p;
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={false}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src='https://i.ibb.co/jymqnKR/slide4.webp' alt='' />
          <h6>Industrious</h6>
          <p>Beloved formulations for gift-giving</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/hVYxvw0/slide1.webp' alt='' />
          <h6>Industrious</h6>
          <p>Beloved formulations for gift-giving</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/hc2pMCv/slide2.webp' alt='' />
          <h6>Industrious</h6>
          <p>Beloved formulations for gift-giving</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/q9CKBmw/slide3.webp' alt='' />
          <h6>Industrious</h6>
          <p>Beloved formulations for gift-giving</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Product;