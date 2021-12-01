import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import Rating from "@mui/material/Rating";
import { Chip, Divider, Stack } from "@mui/material";
import { ExternalGenre, Genre } from "backend/types/ApiExternalGenre";
import { getGenresController } from "backend/controllers/getGenresController";
import { useEffect, useState } from "react";

type Props = {
  alldata: ApiExternalResults;
};

export const HeaderBackdrop = ({ alldata }: Props) => {
  const [genresList, setGenresList] = useState<Genre[]>([]);
  const [genres, setGenres] = useState<ExternalGenre>();

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
  }, [alldata.genre_ids]);

  return (
    <>
      {/*
      ! ------------------------------------------------------------
      ! movie/tv banner and avatar
      ! ------------------------------------------------------------
      */}
      <div className="relative w-full">
        <img
          className="h-48 w-full rounded-t-lg shadow-md object-cover object-center"
          src={`https://image.tmdb.org/t/p/w1280${alldata.backdrop_path}`}
          alt="imgPoster"
        />
        <div className="absolute sm:-mt-32 -mt-20 w-full z-10">
          <img
            className="sm:h-52 h-40 sm:w-40 w-32 rounded-lg shadow-md object-cover object-center mx-auto sm:mr-0 sm:ml-5"
            src={`https://image.tmdb.org/t/p/w300${alldata.poster_path}`}
            alt="imgPoster"
          />
        </div>
      </div>
      {/*
      ! ------------------------------------------------------------
      ! movie/tv general information
      ! ------------------------------------------------------------
      */}
      <div className="relative bg-bgColor p-5 pt-24 flex flex-col">
        {/* title name */}
        <div className="w-full sm:block flex justify-center">
          <p className="text-xs font-thin p-1">
            votado por {alldata.vote_count} pessoas
          </p>

          <Rating
            name="read-only"
            value={Math.round(alldata.vote_average) / 2}
            max={5}
            readOnly
          />
        </div>

        {/* title name */}
        <div className="w-full sm:block flex justify-center">
          <h2 className="font-extrabold leading-5 tracking-tight text-lg">
            {" "}
            {alldata.title ? alldata.title : alldata.name}{" "}
          </h2>
        </div>

        {/* genre */}
        <div className="w-full sm:block flex justify-center mt-2">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
          >
            {genresList.map((genre) => (
              <Chip
                label={genre.name}
                color="success"
                variant="outlined"
                key={`chip_${String(Math.random() * 1000)}`}
              />
            ))}
          </Stack>
        </div>

        {/* descrição name */}
        <div className="w-full flex flex-col justify-center sm:justify-start mt-10">
          <h2 className="font-extrabold leading-5 tracking-tight text-sm text-center sm:text-left">
            Descrição
          </h2>
          <h3 className="font-medium leading-5 tracking-tight text-base mt-3">
            {alldata.overview
              ? alldata.overview
              : "Não há nenhuma descrição no momento..."}
          </h3>
        </div>
      </div>
    </>
  );
};
