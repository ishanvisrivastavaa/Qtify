import React from "react";
import "./Carousel.css";
import Card from "../Card";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function index({ data, navId }) {
  return (
    <>
      <div className="carousel-container">
        <main className="swiper-slides">
          <Swiper
            modules={[Virtual, Navigation, Pagination]}
            //   onSwiper={setSwiperRef}
            slidesPerView={8}
            //   centeredSlides={true}
            spaceBetween={30}
            //   pagination={{
            //     type: "fraction",
            //   }}
            navigation={{
              nextEl: `.arrow-left-${navId}`,
              prevEl: `.arrow-right-${navId}`,
            }}
            virtual
          >
            {data.map((card) => (
              <SwiperSlide key={card.id}>
                <Card
                  imgSrc={card.image}
                  label={card.title}
                  followerCount={card.follows}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`arrow-left-${navId} arrow-left arrow`}>
            <img src="left.png" />
          </div>
          <div className={`arrow-right-${navId} arrow-right arrow`}>
            <img src="right.png" />
          </div>
        </main>
      </div>
    </>
  );
}

export default index;
