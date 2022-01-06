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
        slidesPerView={2}
        spaceBetween={5}
        loop={true}

        breakpoints={{
          490: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          750: {
            slidesPerView: 4,
            spaceBetween: 10,
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
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        pagination={true}
        navigation={true}
        observer={true}
        observeParents={true}
        className="mySwiper"
        grabCursor={true}
      >
        {this.props.children}
      </Swiper >
    );
  }
};
