import { Skeleton } from "@mui/material";
import { getFavoritesController } from "backend/controllers/laravel-api/getFavoritesController";
import { getWatchlistController } from "backend/controllers/laravel-api/getWatchlistController";
import { ApiExternalResponse, LaravelResponseContent } from "backend/types/ApiExternalResponse";
import Card  from "components/Card";
import PaginationLink from "components/PaginationLink/PaginationLink";
import { SetStateAction, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { verify } from "utils/format";
import { getController } from "utils/seletive";

type Props = {
  content: string;
};

export const LocalTodos = ({ content }: Props) => {
  const user = localStorage.getItem('user');
  const userJson = JSON.parse(user!);
  const userToken = userJson.token;
  
  const [favoritos, setFavoritos] = useState<LaravelResponseContent>();
  const [watchList, setwatchList] = useState<LaravelResponseContent>();

  const search = useLocation().search;
  const page = Number(new URLSearchParams(search).get("page"));
  const PageAtual = page ? page : 1;
  const [alldata, setAlldata] = useState<ApiExternalResponse>({
    results: [],
    page: 1,
    total_pages: 10,
    total_results: 500,
  });

  useEffect(() => {
    const Controller = getController(content);

    Controller.handle(PageAtual).then((response: { data: SetStateAction<ApiExternalResponse>; }) => {
      /// puxa os favoritos
      const controllerFavorites = new getFavoritesController();
      controllerFavorites.handle(userToken).then((favoritesResponse) => {
        setFavoritos(favoritesResponse.data);

        /// puxa os dados de lista de espera
        const controllerWatchlist = new getWatchlistController();
        controllerWatchlist.handle(userToken).then((watchlistResponse) => {
          setwatchList(watchlistResponse.data);

          /// então só ai cria as cards, pois os paramentros são dependentes
          setAlldata( response.data );
        });
      }).catch(()=>{
        /// deu erro é pq o usuario não esta logado, então seta as cards para ele poder visualizar normalmente
        setAlldata( response.data );
      });
    });
  }, [PageAtual, content]);

  return (
    <>
      <section className="p-5 dark:bg-gray-700 rounded">
        <div className="relative">
          <h2 className="text-2xl font-extrabold dark:text-gray-50"> Todos ( {content} ) </h2>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
          <span className="text-sm font-semibold dark:text-gray-200">
            Foram achados {alldata.total_results} registros
          </span>
        </div>
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">

          {alldata.results.length > 1 ? (
            alldata.results.map((card) => {
              return (

                <>
                  <div className="w-full h-full relative flex flex-col" key={`div_${String(Math.random() * 1000)}`}>
                  <Card card={card} areinFavorite={verify(favoritos!, card.id)} areInWatchlist={verify(watchList!, card.id)} key={`todos_${String(Math.random() * 1000)}`} />
                    <p className="text-center text-base font-semibold mt-4 dark:text-gray-50">
                      {card.name || card.title}
                    </p>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
            </>
          )}
        </div>
        <div className="flex justify-center mt-8">
          {!!alldata.total_pages ? (
            <PaginationLink
              content={content}
              totalPages={String(alldata.total_pages)}
            />
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};
