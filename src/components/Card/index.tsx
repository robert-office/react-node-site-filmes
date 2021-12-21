import { IconButton, ImageListItemBar, Rating, Skeleton } from "@mui/material";
import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import "./styles.css";

type Props = {
  card: ApiExternalResults;
};

export const Card = ({ card }: Props) => {
  return (
    <div
      className="relative flex flex-col justify-between primaryNonDarkColorBorder rounded-t-lg card h-auto grow shadow-xl group"

      id={String(card.id)}
      style={{ minWidth: "120px" }}
    >
      <div className="relative rounded-t-lg h-auto pb-0">
        <a
          href={`${process.env.REACT_APP_BASE_URL}/detalhes/${card.name
            ? card.name.replace(/ /g, "_")
            : card.title?.replace(/ /g, "_")
            }/${card.id}`}
          className="block"
        >
          {!card.poster_path ? (
            <>
              <div>
                <Skeleton variant="text" width={'100%'} />
                <Skeleton width={'100%'} variant="rectangular" height={252} />
                <Skeleton variant="text" width={'100%'} />
              </div>
            </>
          ) : (
            <img
              className="object-cover w-full overflow-hidden rounded-t-lg bg-indigo-600"
              style={{ minHeight: "300px", maxHeight: "300px" }}
              alt="PostImage"
              src={"https://image.tmdb.org/t/p/w300" + card.poster_path}
            />
          )}
        </a>

        <ImageListItemBar className="opacity-0 group-hover:opacity-100 rounded-t-lg" style={{ transition: '0.3s' }} sx={{ backgroundColor: "rgba(79, 70, 229, .7)" }}
          position="top"
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

        <ImageListItemBar className="opacity-0 group-hover:opacity-100" style={{ transition: '0.3s' }} sx={{ backgroundColor: "rgba(79, 70, 229,.7)" }}
          subtitle={
            <div className="flex justify-center opacity-100">
              <Rating
                size="small"
                precision={0.5}
                name="read-only"
                value={Math.round(card.vote_average) / 2}
                max={5}
                readOnly
              />
            </div>
          }
        />
      </div>
    </div>
  );
};
