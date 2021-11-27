import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// swiper bundle styles
import "swiper/swiper-bundle.min.css";
// swiper core styles
import "swiper/swiper.min.css";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export const LocalCardsSwipper = class Grid extends React.Component {
  render() {
    return (
      <div className="flex pb-10 sm:px-5 gap-x-8 gap-y-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            type: "progressbar",
          }}
          navigation={true}
          breakpoints={{
            490: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            750: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            980: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },

            1600: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {this.props.children}
        </Swiper>
      </div>
    );
  }
};
