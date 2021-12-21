import { getPopularMoviesController } from "backend/controllers/external-api/getPopularMoviesController";
import { getPopularTvController } from "backend/controllers/external-api/getPopularTvController";
import { getRecomendedMoviesController } from "backend/controllers/external-api/getRecomendedMoviesController"

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