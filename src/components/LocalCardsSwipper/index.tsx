import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// swiper bundle styles
import "swiper/swiper-bundle.min.css";
// swiper core styles
import "swiper/swiper.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";

import arrowR from "../../assets/images/svgs/ArrowR.svg";
import arrowL from "../../assets/images/svgs/ArrowL.svg";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const LocalCardsSwipper = class Grid extends React.Component {
  render() {
    const next =
      "swiper-button-next-" + String(Math.floor(Math.random() * 100));
    const prev =
      "swiper-button-prev-" + String(Math.floor(Math.random() * 100));

    return (
      <div className="relative flex pb-10 sm:px-5 gap-x-8 gap-y-16">
        <div className="absolute z-20 w-full h-1 flex justify-between top-10">
          <button
            className={
              prev +
              " animate-pulse relative h-12 w-12 rounded-full bg-indigo-600 text-center text-white font-extrabold"
            }
          >
            <img src={arrowL} alt="prev" />
          </button>

          <button
            className={
              next +
              " animate-pulse relative sm:mr-10  h-10 w-10 rounded-full bg-indigo-600 text-center text-white font-extrabold"
            }
          >
            <img src={arrowR} alt="next" />
          </button>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: "." + next,
            prevEl: "." + prev,
          }}
          breakpoints={{
            490: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            750: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            980: {
              slidesPerView: 4,
              spaceBetween: 20,
            },

            1100: {
              slidesPerView: 5,
              spaceBetween: 20,
            },

            1600: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          observer={true}
          observeParents={true}
          parallax={true}
          className="mySwiper"
        >
          {this.props.children}
        </Swiper>
      </div>
    );
  }
};
