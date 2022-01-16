import Card  from "components/Card";
import { useEffect, useState } from "react";
import { Label } from "components/MoviesLabel";
import { SwiperSlide } from "swiper/react";
import { LocalSwipper } from "components/LocalSwipper";
import { getRecomendedMoviesController } from "backend/controllers/external-api/getRecomendedMoviesController";
import { ApiExternalResponse, LaravelResponseContent } from "backend/types/ApiExternalResponse";
import { Skeleton } from "@mui/material";
import { getFavoritesController } from "backend/controllers/laravel-api/getFavoritesController";
import { getWatchlistController } from "backend/controllers/laravel-api/getWatchlistController";
import { verify } from "utils/format";

export const Recomendeds = () => {

  const user = localStorage.getItem('user');
  const userJson = JSON.parse(user!);
  const userToken = userJson.token;
  
  const [favoritos, setFavoritos] = useState<LaravelResponseContent>();
  const [watchList, setwatchList] = useState<LaravelResponseContent>();

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
      /// puxa os favoritos
      const controllerFavorites = new getFavoritesController();
      controllerFavorites.handle(userToken).then((favoritesResponse) => {
        setFavoritos(favoritesResponse.data);

        /// puxa os dados de lista de espera
        const controllerWatchlist = new getWatchlistController();
        controllerWatchlist.handle(userToken).then((watchlistResponse) => {
          setwatchList(watchlistResponse.data);

          /// então só ai cria as cards, pois os paramentros são dependentes
          setCards( response.data );
        });
      }).catch(()=>{
        /// deu erro é pq o usuario não esta logado, então seta as cards para ele poder visualizar normalmente
        setCards( response.data );
      });
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
                  <SwiperSlide key={`recomended_${String(Math.random() * 1000)}`}>
                    <Card card={card} areinFavorite={verify(favoritos!, card.id)} areInWatchlist={verify(watchList!, card.id)} />
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