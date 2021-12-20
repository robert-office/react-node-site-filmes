import { ImageListItemBar, Rating, Skeleton } from "@mui/material";
import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import "./styles.css";
import StarIcon from '@material-ui/icons/Star';

type Props = {
  card: ApiExternalResults;
};

export const Card = ({ card }: Props) => {
  return (
    <div
      className="relative flex flex-col justify-between primaryNonDarkColorBorder rounded-t-lg card h-auto grow shadow-xl"

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
        <ImageListItemBar
          subtitle={
            <div className="flex justify-center">
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
