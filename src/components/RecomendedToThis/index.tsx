import Card from "components/Card";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { LocalSwipper } from "components/LocalSwipper";
import {
  ApiExternalResponse,
  ApiExternalResults,
  LaravelResponseContent,
} from "backend/types/ApiExternalResponse";
import { getRecomendedToThisController } from "backend/controllers/external-api/getRecomendedToThisController";
import { Skeleton } from "@mui/material";
import { getFavoritesController } from "backend/controllers/laravel-api/getFavoritesController";
import { getWatchlistController } from "backend/controllers/laravel-api/getWatchlistController";
import { verify } from "utils/format";

type Props = {
  alldata: ApiExternalResults;
};

export const RecomendedToThis = ({ alldata }: Props) => {
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

  useEffect(() => {
    const controller = new getRecomendedToThisController();
    controller.handle(alldata.media_type, alldata.id).then((response) => {
      /// puxa os favoritos
      const controllerFavorites = new getFavoritesController();
      controllerFavorites.handle(userToken).then((favoritesResponse) => {
        setFavoritos(favoritesResponse.data);

        /// puxa os dados de lista de espera
        const controllerWatchlist = new getWatchlistController();
        controllerWatchlist.handle(userToken).then((watchlistResponse) => {
          setwatchList(watchlistResponse.data);

          /// então só ai cria as cards, pois os paramentros são dependentes
          setCards(response.data);
        });
      }).catch(()=>{
        /// deu erro é pq o usuario não esta logado, então seta as cards para ele poder visualizar normalmente
        setCards( response.data );
      });
    });

  }, [alldata.id, alldata.media_type]);

  return (
    <>
      {/* Section */}
      <section className="bg-bgColor dark:bg-gray-700">
        <div className="w-full px-5 py-6 mx-auto space-y-5 my-4 max-w-7xl">
          <h2 className="font-extrabold leading-5 tracking-tight text-sm text-center sm:text-left dark:text-gray-50">
            Recomendados para quem viu esse
          </h2>
          {/* Local Cards */}
          <LocalSwipper>
            {cards.results.length > 1 ? (
              cards.results.slice(0, 10).map((card) => {
                return (
                  <SwiperSlide key={`recomended_to_this_${String(Math.random() * 1000)}`}>
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
