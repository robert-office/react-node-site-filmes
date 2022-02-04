import { ApiExternalResults, LaravelResponseContent } from "backend/types/ApiExternalResponse";
import Rating from "@mui/material/Rating";
import { Button, ButtonGroup, Chip, Divider, Skeleton, Stack, useMediaQuery } from "@mui/material";
import { ExternalGenre, Genre } from "backend/types/ApiExternalGenre";
import { getGenresController } from "backend/controllers/external-api/getGenresController";
import { useEffect, useState } from "react";
import { getFavoritesController } from "backend/controllers/laravel-api/getFavoritesController";
import { getWatchlistController } from "backend/controllers/laravel-api/getWatchlistController";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import { useSnackbar } from 'notistack';
import { postFavoriteController } from "backend/controllers/laravel-api/postFavoriteController";
import { historyController } from "backend/controllers/laravel-api/historyController";
import { postWatchlistController } from "backend/controllers/laravel-api/postWatchlistController";
import { verify } from "utils/format";
import { ToggleIconButton } from "components/ToggleIconButton";

type Props = {
  alldata: ApiExternalResults;
};

export const HeaderBackdrop = ({ alldata }: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  const [genresList, setGenresList] = useState<Genre[]>([]);
  const [genres, setGenres] = useState<ExternalGenre>();

  const user = localStorage.getItem('user');
  const userJson = JSON.parse(user!);
  const userToken = userJson.token;

  const [favoritos, setFavoritos] = useState<LaravelResponseContent>();
  const [watchList, setwatchList] = useState<LaravelResponseContent>();

  /// query para consulta em JS
  const matches = useMediaQuery('(min-width:640px)');

  const [redenrizeFavAndWatch, setRedenrizeFavAndWatch] = useState(false);

  useEffect(() => {
    /// puxa os favoritos
    const controllerFavorites = new getFavoritesController();
    controllerFavorites.handle(userToken).then((favoritesResponse) => {
      setFavoritos(favoritesResponse.data);

      /// puxa os dados de lista de espera
      const controllerWatchlist = new getWatchlistController();
      controllerWatchlist.handle(userToken).then((watchlistResponse) => {
        setwatchList(watchlistResponse.data);
        setRedenrizeFavAndWatch(true);
      }).catch(() => {
        setRedenrizeFavAndWatch(true);
      })
    }).catch(() => {
      setRedenrizeFavAndWatch(true);
    })
  }, []);

  useEffect(() => {
    const controller = new getGenresController();
    controller.handle(alldata.media_type).then((data) => {
      setGenres(data.data);

      data.data.genres.map((genreAtual) => {
        alldata.genre_ids?.map((genre) => {
          if (genre === genreAtual.id) {
            setGenresList((genresList) => [...genresList, genreAtual]);
          }
        });
      });
    });
  }, [alldata.genre_ids, alldata.media_type]);

  function favoritarHandle(id_movie: number, name: string, title: string, poster_path: string) {
    let data = {
      id_movie: id_movie,
      name: name,
      title: title,
      poster_path: poster_path
    };

    let dataString = JSON.stringify(data);

    const controller = new postFavoriteController();
    const historyC = new historyController();

    controller.handle(dataString, userToken).then((response) => {
      controller.choice(response.data.response, dataString, userToken).then((response) => {
        if (response.status == 201) {
          enqueueSnackbar('Favoritado com sucesso!', {
            variant: 'success',
          });

          historyC.addInHistory(userToken, 2, name ? name : title).then(() => {
            console.log('history adicionado com sucesso!');
          });
        }
        else {
          enqueueSnackbar('Retirado com sucesso!', {
            variant: 'success',
          });

          historyC.addInHistory(userToken, 3, name ? name : title).then(() => {
            console.log('history adicionado com sucesso!');
          });
        }
      });
    })
  }

  function WatchlistHandle(id_movie: number, name: string, title: string, poster_path: string) {
    let data = {
      id_movie: id_movie,
      name: name,
      title: title,
      poster_path: poster_path
    };

    let dataString = JSON.stringify(data);

    const controller = new postWatchlistController();
    const historyC = new historyController();

    controller.handle(dataString, userToken).then((response) => {
      controller.choice(response.data.response, dataString, userToken).then((response) => {
        if (response.status == 201) {
          enqueueSnackbar('Colocado na lista com sucesso!', {
            variant: 'success',
          });

          historyC.addInHistory(userToken, 4, name ? name : title).then(() => {
            console.log('history adicionado com sucesso!');
          });
        }
        else {
          enqueueSnackbar('Retirado da lista com sucesso!', {
            variant: 'success',
          });

          historyC.addInHistory(userToken, 5, name ? name : title).then(() => {
            console.log('history adicionado com sucesso!');
          });
        }
      });
    })
  }

  const redirectTheClick = (id: string) => {
    document.getElementById(id)?.click();
  }


  return (
    <>
      {/*
      ! ------------------------------------------------------------
      ! movie/tv banner and avatar
      ! ------------------------------------------------------------
      */}
      <div className="relative w-full dark:bg-gray-700 rounded-t-lg">
        {!alldata.backdrop_path ? (
          <>
            <Skeleton
              variant="rectangular"
              height={200}
              className="w-full rounded-t-lg shadow-md object-cover object-center"
            />
          </>
        ) : (
          <>

            <img
              style={{ zIndex: "1" }}
              className="h-52 w-full rounded-t-lg shadow-md object-cover object-center"
              src={`https://image.tmdb.org/t/p/w1280${alldata.backdrop_path}`}
              alt="imgPoster"
            />
          </>
        )}

        <div className="absolute sm:-mt-32 -mt-20 w-full z-10">
          {!alldata.backdrop_path ? (
            <>
              <Skeleton
                variant="rectangular"
                height={208}
                className="sm:h-52 h-40 sm:w-40 w-32 rounded-lg shadow-md object-cover object-center mx-auto sm:mr-0 sm:ml-5"
              />
            </>
          ) : (
            <img
              className="sm:h-52 h-40 sm:w-40 w-32 rounded-lg shadow-md object-cover object-center mx-auto sm:mr-0 sm:ml-5"
              src={`https://image.tmdb.org/t/p/w300${alldata.poster_path}`}
              alt="imgPoster"
            />
          )}
        </div>
      </div>
      {/*
      ! ------------------------------------------------------------
      ! movie/tv general information
      ! ------------------------------------------------------------
      */}
      <div className="relative bg-bgColor dark:bg-gray-700 p-5 pt-24 flex flex-col">
        {/* title name */}
        <div className="w-full sm:flex-row flex flex-col">
          <p className="text-xs font-thin p-1 dark:text-gray-50 sm:text-left text-center mt-3">
            votado por {alldata.vote_count} pessoas
          </p>

          <Rating
            sx={{ marginLeft: !matches ? 'auto' : '', marginRight: !matches ? 'auto' : '' }}
            name="read-only"
            value={Math.round(alldata.vote_average) / 2}
            max={5}
            readOnly
            className="mt-3"
          />
        </div>

        {/* title name */}
        <div className="w-full sm:block flex justify-center mt-3">
          <h2 className="font-extrabold leading-5 tracking-tight text-lg dark:text-white">
            {" "}
            {alldata.title ? alldata.title : alldata.name}{" "}
          </h2>
        </div>


        {/* genre */}
        <div className="w-full sm:block flex justify-center mt-5">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
          >
            {genresList.map((genre) => (
              <Chip
                label={genre.name}
                color="success"

                key={`chip_${String(Math.random() * 1000)}`}
              />
            ))}
          </Stack>
        </div>

        {/* add/remove favorite and add/remove from watchlist*/}
        {redenrizeFavAndWatch && (
          <div className="w-full sm:flex-row flex flex-col sm:space-x-3 space-y-5 sm:space-y-0 mt-5">
            <ButtonGroup variant="outlined" aria-label="favorite" color="primary" className="bg-gray-100 dark:bg-gray-700">
              <Button size="large" sx={{ width: !matches ? '100%' : 'auto' }}
                onClick={() => {
                  redirectTheClick('favoritoID');
                }}>
                Favoritar
              </Button>
              <Button
                size="small"
              >
                <ToggleIconButton Props={{
                  id: 'favoritoID',
                  initialValue: verify(favoritos!, alldata.id),
                  activeIcon: <StarIcon />,
                  disabledIcon: <StarBorderIcon />,
                  fn: () => favoritarHandle(alldata.id, alldata.name!, alldata.title!, alldata.poster_path!),
                  isDarkable: true
                }} />
              </Button>
            </ButtonGroup>

            <ButtonGroup variant="outlined" aria-label="watchlist" className="bg-gray-100 dark:bg-gray-700">
              <Button size="large" sx={{ width: !matches ? '100%' : 'auto' }}
                onClick={() => {
                  redirectTheClick('watchlistID');
                }}>
                Lista de Espera
              </Button>
              <Button
                size="small"
              >
                <ToggleIconButton Props={{
                  id: 'watchlistID',
                  initialValue: verify(watchList!, alldata.id),
                  activeIcon: <WatchLaterIcon />,
                  disabledIcon: <WatchLaterOutlinedIcon />,
                  fn: () => WatchlistHandle(alldata.id, alldata.name!, alldata.title!, alldata.poster_path!),
                  isDarkable: true
                }} />
              </Button>
            </ButtonGroup>
          </div>
        )}

        {/* descrição name */}
        <div className="w-full flex flex-col justify-center sm:justify-start mt-10">
          <h2 className="font-extrabold leading-5 tracking-tight text-sm text-center sm:text-left dark:text-gray-50">
            Descrição
          </h2>
          <h3 className="font-medium leading-5 tracking-tight text-base mt-3 dark:text-gray-50 text-center sm:text-left">
            {alldata.overview
              ? alldata.overview
              : "Não há nenhuma descrição no momento..."}
          </h3>
        </div>
      </div>
    </>
  );
};
