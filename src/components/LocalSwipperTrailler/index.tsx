import React from "react";
import { Swiper } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "./styles.css";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const LocalSwipperTrailler = class Grid extends React.Component {
  render() {

    return (
      <div className="relative flex pb-10 sm:px-5 gap-x-8 gap-y-16">
        <div className="absolute z-20 w-full h-1 flex justify-between top-44">
          

         
        </div>
            
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
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
          grabCursor={true}
        >
          {this.props.children}
        </Swiper>
      </div>
    );
  }
};
