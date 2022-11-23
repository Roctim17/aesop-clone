import React  from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../Styles/Product.css";
import gift1 from '../assets/image/gift1.png'
import gift2 from '../assets/image/gift2.png'
import gift3 from '../assets/image/gift3.png'
import gift4 from '../assets/image/gift4.jpg'

// import required modules
import { Keyboard, Scrollbar, Navigation } from "swiper";


const Gift = () => {
//  const {title,subtitle}=p;
  return (
    <>

    <div>
        <h3 className="p-5">Gifts to delight</h3>
    </div>
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
          <img className="gift" src={gift2} alt='' />
          <h6>Industrious</h6>
          <p>Beloved formulations for gift-giving</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="gift"  src={gift1} alt='' />
          <h6>Industrious</h6>
          <p>Beloved formulations for gift-giving</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="gift"  src={gift3} alt='' />
          <h6>Industrious</h6>
          <p>Beloved formulations for gift-giving</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="gift"  src={gift4} alt='' />
          <h6>Industrious</h6>
          <p>Beloved formulations for gift-giving</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Gift;