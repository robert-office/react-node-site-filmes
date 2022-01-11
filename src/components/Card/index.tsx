import { IconButton, ImageListItemBar, Rating, Skeleton } from "@mui/material";
import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import { memo } from 'react';
import "./styles.css";

type Props = {
  card: ApiExternalResults;
};

const Card = ({ card }: Props) => {
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

          subtitle={
            <div className=" flex justify-between opacity-100">
              <IconButton
                onClick={() => window.alert('adicionado a lista de favoritos!')}
                sx={{ color: 'white' }}
                aria-label={`star`}
              >
                <StarBorderIcon />
              </IconButton>

              <IconButton
                onClick={() => window.alert('adicionado a lista de assistir depois!')}
                sx={{ color: 'white' }}
                aria-label={`watchlist`}
              >
                <WatchLaterIcon />

              </IconButton>
            </div>
          }
        />

        <ImageListItemBar className="opacity-0 group-hover:opacity-100" style={{ transition: '0.3s' }} sx={{ backgroundColor: "rgba(0, 0, 0,.7)" }}
          subtitle={
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
                <p className="text-xs"> votado por: { card.vote_count } pessoas </p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default memo(Card);