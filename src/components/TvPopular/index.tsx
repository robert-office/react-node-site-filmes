import { Card } from "components/Card";
import { useEffect, useState } from "react";
import { Label } from "components/MoviesLabel";
import { httpController } from "backend/controllers/htppController";
import { LocalCardsSwipper } from "components/LocalCardsSwipper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

export const TvPopular = () => {
  const [cards, setCards] = useState([]);
  
  const envolviment = {
    SectionTitle : "Mais assistidos",
    SectionSubTitle: "Tv / Séries",
    ButtonAllHref: "/tv"
  }

  useEffect(() => {
    const http = new httpController(); 
    http.handle().get("/tv/popular").then(({ data }) => setCards(data.cards));
  }, []);

  return (
    <>
      {/* Section */}
      <section className="bg-white">
        <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          {/* Label */}
          <Label envolviment={envolviment} />

          {/* Local Cards */}
            <LocalCardsSwipper>
              {cards.map((card) => {
                return (
                  <SwiperSlide>
                    <Card card={card} />
                  </SwiperSlide>
                );
              })}
            </LocalCardsSwipper>
        </div>
      </section>
    </>
  );
};
