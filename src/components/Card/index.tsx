import { ImageListItemBar, Rating, Skeleton } from "@mui/material";
import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import { memo } from 'react';
import "./styles.css";
import { postFavoriteController } from "backend/controllers/laravel-api/postFavoriteController";
import { postWatchlistController } from "backend/controllers/laravel-api/postWatchlistController";
import { ToggleIconButton } from "components/ToggleIconButton";
import StarIcon from '@mui/icons-material/Star';
import { useSnackbar } from 'notistack';

type Props = {
  card: ApiExternalResults;
  areinFavorite?: boolean;
  areInWatchlist?: boolean;
};

const Card = ({ card, areinFavorite, areInWatchlist }: Props) => {

  const { enqueueSnackbar } = useSnackbar();

  const user = localStorage.getItem('user');
  const userJson = JSON.parse(user!);
  const userToken = userJson.token;

  function favoritarHandle(id_movie: number, name: string, title: string, poster_path: string) {
    let data = {
      id_movie: id_movie,
      name: name,
      title: title,
      poster_path: poster_path
    };

    let dataString = JSON.stringify(data);

    const controller = new postFavoriteController();

    controller.handle(dataString, userToken).then((response) => {
      controller.choice(response.data.response, dataString, userToken).then((response) => {
        if (response.status == 201) {
          enqueueSnackbar('Favoritado com sucesso!', {
            variant: 'success',
          });
        }
        else {
          enqueueSnackbar('Retirado com sucesso!', {
            variant: 'success',
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

    controller.handle(dataString, userToken).then((response) => {
      controller.choice(response.data.response, dataString, userToken).then((response) => {
        if (response.status == 201) {
          enqueueSnackbar('Colocado na lista com sucesso!', {
            variant: 'success',
          });
        }
        else {
          enqueueSnackbar('Retirado da lista com sucesso!', {
            variant: 'success',
          });
        }
      });
    })
  }

  const favoriteButton = {
    initialValue: areinFavorite,
    activeIcon: <StarIcon />,
    disabledIcon: <StarBorderIcon />,
    fn: () => favoritarHandle(card.id, card.name!, card.title!, card.poster_path!)
  }

  const watchlistButton = {
    initialValue: areInWatchlist,
    activeIcon: <WatchLaterIcon />,
    disabledIcon: <WatchLaterOutlinedIcon />,
    fn: () => WatchlistHandle(card.id, card.name!, card.title!, card.poster_path!)
  }

  let subt = <></>;

  if (userToken) {
    subt = <div className=" flex justify-between opacity-100">
      <ToggleIconButton Props={favoriteButton} />
      <ToggleIconButton Props={watchlistButton} />
    </div>
  }

  return (
    <div
      className="relative flex flex-col justify-between primaryNonDarkColorBorder rounded-t-lg card h-auto shadow-xl group overflow-hidden"

      id={String(card.id)}
      style={{ minWidth: "120px", minHeight: "252px" }}
    >
      <div className="relative rounded-t-lg h-auto pb-0">
        <a
          href={`${process.env.REACT_APP_BASE_URL}/detalhes/${card.name
            ? card.name.replace(/ /g, "_").replace(/\//g, ' ')
            : card.title?.replace(/ /g, "_").replace(/\//g, ' ')
            }/${card.id}`}
          className="block"
        >
          {!card.poster_path ? (
            <>
              <div>
                <Skeleton variant="text" width={'100%'} />
                <Skeleton width={'100%'} variant="rectangular" className="h-full sm:h-72" />
                <Skeleton variant="text" width={'100%'} />
              </div>
            </>
          ) : (
            <img
              className="object-cover w-full overflow-hidden rounded-t-lg bg-indigo-600 grow h-full sm:h-72"
              alt="PostImage"
              src={"https://image.tmdb.org/t/p/w300" + card.poster_path}
            />
          )}
        </a>

        <ImageListItemBar className="opacity-0 group-hover:opacity-100 rounded-t-lg" style={{ transition: '0.3s' }} sx={{ backgroundColor: "rgba(0, 0, 0, .7)" }}
          position="top"

          title={
            <>
              <a href={`${process.env.REACT_APP_BASE_URL}/detalhes/${card.name
                ? card.name.replace(/ /g, "_").replace(/\//g, ' ')
                : card.title?.replace(/ /g, "_").replace(/\//g, ' ')
                }/${card.id}`}
              >
                <div className=" text-center overflow-x-scroll">
                  <p className="text-center"> {card.name ? card.name : card.title} </p>
                </div>
              </a>
            </>
          }
          subtitle={subt}
        />

        <ImageListItemBar className="opacity-0 group-hover:opacity-100" style={{ transition: '0.3s' }} sx={{ backgroundColor: "rgba(0, 0, 0,.7)" }}
          subtitle=
          {
            <div className="flex flex-col opacity-100">
              <div className="flex justify-between">
                <Rating
                  sx={{ color: "white" }}
                  size="small"
                  precision={0.5}
                  name="read-only"
                  value={Math.round(card.vote_average) / 2}
                  max={5}
                  readOnly
                />
                <p>
                  ( {Math.round(card.vote_average) / 2} )
                </p>
              </div>
              <div>
                <p className="text-xs"> votado por: {card.vote_count} pessoas </p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default memo(Card);