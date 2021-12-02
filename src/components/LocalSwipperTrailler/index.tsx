import React from "react";
import { Swiper } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import arrowR from "../../assets/images/svgs/ArrowR.svg";
import arrowL from "../../assets/images/svgs/ArrowL.svg";
import "./styles.css";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const LocalSwipperTrailler = class Grid extends React.Component {
  render() {
    const next =
      "swiper-button-next-" + String(Math.floor(Math.random() * 100));
    const prev =
      "swiper-button-prev-" + String(Math.floor(Math.random() * 100));

    return (
      <div className="relative flex pb-10 sm:px-5 gap-x-8 gap-y-16">
        <div className="absolute z-20 w-full h-1 flex justify-between top-44">
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
              " animate-pulse relative sm:mr-10  h-12 w-12 rounded-full bg-indigo-600 text-center text-white font-extrabold"
            }
          >
            <img src={arrowR} alt="next" />
          </button>
        </div>
            
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: "." + next,
            prevEl: "." + prev,
          }}
          breakpoints={{
            1270: {
              slidesPerView: 2,
              spaceBetween: 20,
            }
          }}
          observer={true}
          observeParents={true}
          parallax={true}
          className="mySwiperTrailler"
        >
          {this.props.children}
        </Swiper>
      </div>
    );
  }
};
