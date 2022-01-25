import React from "react";
import { Swiper } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const LocalSwipperTimeLines = class Grid extends React.Component {
  render() {
    return (
      <Swiper
        slidesPerView={1}
        spaceBetween={5}

        breakpoints={{
          490: {
            slidesPerView: 5,
            spaceBetween: 10,
          }
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
