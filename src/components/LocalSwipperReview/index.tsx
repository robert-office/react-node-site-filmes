import React from "react";
import { Swiper } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Pagination, Navigation]);

export const LocalSwipperReviews = class Grid extends React.Component {
  render() {
    return (
      <div className="relative flex pb-10 sm:px-5 gap-x-8 gap-y-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
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

            1100: {
              slidesPerView: 4,
              spaceBetween: 20,
            },

            1600: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          observer={true}
          observeParents={true}
          className="mySwiperReview"
        >
          {this.props.children}
        </Swiper>
      </div>
    );
  }
};
