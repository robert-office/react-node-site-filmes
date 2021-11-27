import { Card } from "components/Card";
import { useEffect, useState } from "react";
import { Label } from "components/MoviesLabel";
import { httpController } from "backend/controllers/htppController";
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

export const Recomendeds = () => {
  const [cards, setCards] = useState([]);

  const envolviment = {
    SectionTitle: "Recomendados",
    SectionSubTitle: "Filmes",
    ButtonAllHref: "/recomendados",
  };

  useEffect(() => {
    const http = new httpController();
    http
      .handle()
      .get("/movie/popular")
      .then(({ data }) => setCards(data.cards));
  }, []);

  return (
    <>
      {/* Section */}
      <section className="bg-white">
        <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          {/* Label */}
          <Label envolviment={envolviment} />

          {/* Local Cards */}
          <div className="flex pb-10 sm:px-5 gap-x-8 gap-y-16">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
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

                1200: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },

                1600: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                }
              }}
              className="mySwiper"
            >
              {cards.map((card) => {
                return (
                  <SwiperSlide>
                    {" "}
                    <Card card={card} />{" "}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
