import { useEffect, useState } from "react";
import { Label } from "components/MoviesLabel";
import { LocalCardsSwipper } from "components/LocalCardsSwipper";
// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import { getPopularTvController } from "backend/controllers/getPopularTvController";
import { Card } from "components/Card";
import { ApiExternalResponse } from "backend/types/ApiExternalResponse";

export const TvPopular = () => {
  const [cards, setCards] = useState<ApiExternalResponse>({
    results : []
  });

  const envolviment = {
    SectionTitle: "Mais assistidos",
    SectionSubTitle: "Tv / Séries",
    ButtonAllHref: "/tv",
  };

  useEffect(() => {
    const controller = new getPopularTvController();
    controller.handle().then(( response ) => {
      setCards( response.data );
    });
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
            {cards.results.map((card) => {
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
