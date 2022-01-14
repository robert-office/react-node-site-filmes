import { useEffect, useState } from "react";
import { Label } from "components/MoviesLabel";
import { SwiperSlide } from "swiper/react";
import { LocalSwipper } from "components/LocalSwipper";
import { LaravelResponseContent } from "backend/types/ApiExternalResponse";
import { Skeleton } from "@mui/material";
import { getFavoritesController } from "backend/controllers/laravel-api/getFavoritesController";
import CardMinimized from "components/CardMinimized";

export const Favorites = () => {
  const [cards, setCards] = useState<LaravelResponseContent>({
    contents: []
  });

  const envolviment = {
    SectionTitle: "Favoritos",
    SectionSubTitle: "",
    ButtonAllHref: "/dashboard/favorites",
  };

  const user = localStorage.getItem('user');
  const userJson = JSON.parse(user!);
  const userToken = userJson.token;

  useEffect(() => {
    const controller = new getFavoritesController();
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
            {cards ? (
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
