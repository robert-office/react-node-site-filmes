import { ExternalMovies } from "backend/ApiTypesObjects/ApiTypeExternalMovies";
import { httpController } from "backend/controllers/htppController";
import { ApiExternalResponse } from "backend/types/ApiExternalResponse";

export class getPopularMoviesService {
    execute() {
        const http = new httpController();
        
        return http
        .handle( new ExternalMovies() )
        .get<ApiExternalResponse>(`/movie/popular?api_key=${process.env.REACT_APP_BASE_API_FILMES_KEY}`);
    }
}