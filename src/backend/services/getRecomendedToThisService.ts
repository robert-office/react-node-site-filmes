import { ExternalMovies } from "backend/ApiTypesObjects/ApiTypeExternalMovies";
import { httpController } from "backend/controllers/htppController";
import { ApiExternalResponse } from "backend/types/ApiExternalResponse";

export class getRecomendedToThisService {
    execute(movieOrTv : string, id: number) {
        const http = new httpController();
        
        return http
        .handle( new ExternalMovies() )
        .get<ApiExternalResponse>(`/${movieOrTv}/${id}//recommendations?api_key=${process.env.REACT_APP_BASE_API_FILMES_KEY}&language=pt-BR`);
    }
}