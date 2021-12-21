import { ExternalMovies } from "backend/ApiTypesObjects/ApiTypeExternalMovies";
import { httpController } from "backend/controllers/htppController";
import { ExternalGenre } from "backend/types/ApiExternalGenre";

export class getGenreService {
    execute( movieOrTv: string ) {
        const http = new httpController();

        /// retorna o get da API
        return http
        .handle( new ExternalMovies() )
        .get<ExternalGenre>(`/genre/${movieOrTv}/list?api_key=${process.env.REACT_APP_BASE_API_FILMES_KEY}&language=pt-BR`);
    }
}