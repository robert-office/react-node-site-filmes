import React from "react";
import { Swiper } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const LocalSwipper = class Grid extends React.Component {
  render() {
    return (
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}

        breakpoints={{
          490: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          750: {
            slidesPerView: 4,
            spaceBetween: 20,
          },

          980: {
            slidesPerView: 5,
            spaceBetween: 20,
          },

          1100: {
            slidesPerView: 6,
            spaceBetween: 20,
          },

          1600: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        observer={true}
        observeParents={true}
        className="mySwiper"
        grabCursor={true}
      >
        {this.props.children}
      </Swiper>
    );
  }
};
