import { ExternalMovies } from "backend/ApiTypesObjects/ApiTypeExternalMovies";
import { httpController } from "backend/controllers/htppController";
import { ApiExternalTraillers } from "backend/types/ApiExternalTraillers";

export class getPopularTraillersService {
    execute(movie_id: number, movieOrTv: string) {
        const http = new httpController();
        
        return http
        .handle( new ExternalMovies() )
        .get<ApiExternalTraillers>(`/${movieOrTv}/${movie_id}/videos?api_key=${process.env.REACT_APP_BASE_API_FILMES_KEY}`);
    }
}