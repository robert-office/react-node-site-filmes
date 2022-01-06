import { useEffect, useState } from "react";
import { Label } from "components/MoviesLabel";
import { LocalSwipper } from "components/LocalSwipper";
// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import { getPopularTvController } from "backend/controllers/external-api/getPopularTvController";
import Card  from "components/Card";
import { ApiExternalResponse } from "backend/types/ApiExternalResponse";
import { Skeleton } from "@mui/material";

export const TvPopular = () => {
  const [cards, setCards] = useState<ApiExternalResponse>({
    results: [],
    page: 1,
    total_pages: 10,
    total_results: 500
  });

  const envolviment = {
    SectionTitle: "Mais assistidos",
    SectionSubTitle: "Tv / Séries",
    ButtonAllHref: "/tv",
  };

  useEffect(() => {
    const controller = new getPopularTvController();
    controller.handle().then((response) => {
      setCards(response.data);
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
            {cards.results.length > 1 ? (
              cards.results.slice(0, 10).map((card) => {
                return (
                  <SwiperSlide key={`tv_popular_${String(Math.random() * 1000)}`}>
                    <Card card={card} />
                  </SwiperSlide>
                );
              })
            ) :
              <>
                <div className="flex flex-row justify-between">
                  <Skeleton width={'18%'} variant="rectangular" height={290} />
                  <Skeleton width={'18%'} variant="rectangular" height={290} />
                  <Skeleton width={'18%'} variant="rectangular" height={290} />
                  <Skeleton width={'18%'} variant="rectangular" height={290} />
                  <Skeleton width={'18%'} variant="rectangular" height={290} />
                </div>
              </>
            }
          </LocalSwipper>
        </div>
      </section>
    </>
  );
};
