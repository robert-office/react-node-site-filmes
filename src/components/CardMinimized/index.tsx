import { ImageListItemBar, Skeleton } from "@mui/material";
import { content } from "backend/types/ApiExternalResponse";
import { memo } from 'react';
import "./styles.css";

type Props = {
  card: content;
};

const CardMinimized = ({ card }: Props) => {
  return (
    <div
      className="relative flex flex-col justify-between primaryNonDarkColorBorder rounded-t-lg card h-auto shadow-xl group overflow-hidden"

      id={String(card.id_movie)}
      style={{ minWidth: "120px", minHeight: "252px" }}
    >
      <div className="relative rounded-t-lg h-auto pb-0">
        <a
          href={`${process.env.REACT_APP_BASE_URL}/detalhes/${card.name
            ? card.name.replace(/ /g, "_").replace(/\//g, ' ')
            : card.title?.replace(/ /g, "_").replace(/\//g, ' ')
            }/${card.id_movie}`}
          className="block"
        >
          {!card.poster_path ? (
            <>
              <div>
                <Skeleton width={'100%'} variant="rectangular" height={288} />
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
                }/${card.id_movie}`}
              >
                <div className=" text-center overflow-x-scroll">
                  <p className="text-center"> {card.name ? card.name : card.title} </p>
                </div>
              </a>
            </>
          }
        />
      </div>
    </div>
  );
};

export default memo(CardMinimized);