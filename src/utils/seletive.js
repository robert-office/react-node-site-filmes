import { getPopularMoviesController } from "backend/controllers/getPopularMoviesController";
import { getPopularTvController } from "backend/controllers/getPopularTvController";
import { getRecomendedMoviesController } from "backend/controllers/getRecomendedMoviesController"

export function getController( selection ) {
    switch (selection) {
        case "recomendados":
            return new getRecomendedMoviesController();
        case "populares":
            return new getPopularMoviesController();
        case "tv":
            return new getPopularTvController();
        default:
            return new getRecomendedMoviesController();
    }
}