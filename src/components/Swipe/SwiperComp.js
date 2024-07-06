import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './Swiper.css';
import slide_image_1 from './screenshot.png';
import slide_image_2 from './screenshot.png';
import slide_image_3 from './screenshot.png';
import slide_image_4 from './screenshot.png';
import slide_image_5 from './screenshot.png';
import slide_image_6 from './screenshot.png';
import slide_image_7 from './screenshot.png';

function SwiperComp() {
  return (
    <div className="container">
      <h1 className="heading">slideshow test</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
       
        modules={[EffectCoverflow, Pagination, Navigation]}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable:true,
        }}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_img" />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperComp;
