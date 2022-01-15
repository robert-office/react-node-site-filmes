import { useEffect, useState } from "react";
import { Label } from "components/MoviesLabel";
import { SwiperSlide } from "swiper/react";
import { LocalSwipper } from "components/LocalSwipper";
import { LaravelResponseContent } from "backend/types/ApiExternalResponse";
import { Skeleton } from "@mui/material";
import CardMinimized from "components/CardMinimized";
import { getWatchlistController } from "backend/controllers/laravel-api/getWatchlistController";

export const Watchlist = () => {
  const [cards, setCards] = useState<LaravelResponseContent>({
    contents: []
  });

  const envolviment = {
    isNormalLabel: false,
    SectionTitle: "Lista de espera",
    SectionSubTitle: "",
    ButtonAllHref: "/dashboard/watchlist",
  };

  const user = localStorage.getItem('user');
  const userJson = JSON.parse(user!);
  const userToken = userJson.token;

  useEffect(() => {
    const controller = new getWatchlistController();
    controller.handle(userToken).then((response) => {
      setCards(response.data);
    });
  }, []);

  return (
    <>
      {/* Section */}
      <section className="bg-white dark:bg-gray-800 px-2 md:px-">
        <div className="w-full py-6 space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16">
          {/* Label */}
          <Label envolviment={envolviment} />

          {/* Local Cards */}
          <LocalSwipper>
            {cards.contents.length > 0 ? (
              cards.contents.slice(0, 10).map((card) => {
                return (
                  <SwiperSlide key={`favorites_${String(Math.random() * 1000)}`}>
                    <CardMinimized card={card} />
                  </SwiperSlide>
                );
              })
            ) :
              <>
                <div className="flex flex-row justify-between">
                  <SwiperSlide key={`favorites_${String(Math.random() * 1000)}`}>
                    <Skeleton width={'100%'} variant="rectangular" height={290} />
                  </SwiperSlide>
                  <SwiperSlide key={`favorites_${String(Math.random() * 1000)}`}>
                    <Skeleton width={'100%'} variant="rectangular" height={290} />
                  </SwiperSlide>
                  <SwiperSlide key={`favorites_${String(Math.random() * 1000)}`}>
                    <Skeleton width={'100%'} variant="rectangular" height={290} />
                  </SwiperSlide>
                  <SwiperSlide key={`favorites_${String(Math.random() * 1000)}`}>
                    <Skeleton width={'100%'} variant="rectangular" height={290} />
                  </SwiperSlide>
                  <SwiperSlide key={`favorites_${String(Math.random() * 1000)}`}>
                    <Skeleton width={'100%'} variant="rectangular" height={290} />
                  </SwiperSlide>
                  <SwiperSlide key={`favorites_${String(Math.random() * 1000)}`}>
                    <Skeleton width={'100%'} variant="rectangular" height={290} />
                  </SwiperSlide>
                </div>
              </>
            }
          </LocalSwipper>
        </div>
      </section>
    </>
  );
};
