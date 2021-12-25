import { Card } from "components/Card";
import { useEffect, useState } from "react";
import { Label } from "components/MoviesLabel";
import { SwiperSlide } from "swiper/react";
import { LocalSwipper } from "components/LocalSwipper";
import { getRecomendedMoviesController } from "backend/controllers/external-api/getRecomendedMoviesController";
import { ApiExternalResponse } from "backend/types/ApiExternalResponse";

export const Recomendeds = () => {
  const [cards, setCards] = useState<ApiExternalResponse>({
    results: [],
    page: 1,
    total_pages: 10,
    total_results: 500
  });

  const envolviment = {
    SectionTitle: "Recomendados",
    SectionSubTitle: "Filmes",
    ButtonAllHref: "/recomendados",
  };

  useEffect(() => {
    const controller = new getRecomendedMoviesController();
    controller.handle().then(( response ) => {
      setCards( response.data );
    });
  }, []);

  return (
    <>
      {/* Section */}

      

      <section className="bg-white dark:bg-gray-800 px-2 md:px-">
        <div className="w-full py-6 space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-6xl px-8 xl:px-5 mx-auto">
          {/* Label */}
          <Label envolviment={envolviment} />

          {/* Local Cards */}
            <LocalSwipper>
            {cards.results.map((card) => {
                return (
                  <SwiperSlide key={`recomend_${String(Math.random() * 1000)}`}>
                    <Card card={card} />
                  </SwiperSlide>
                );
              })}
            </LocalSwipper>
        </div>
      </section>
    </>
  );
};
