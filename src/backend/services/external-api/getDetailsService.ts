import { ExternalMovies } from "backend/ApiTypesObjects/ApiTypeExternalMovies";
import { httpController } from "backend/controllers/htppController";
import { ApiExternalResponse } from "backend/types/ApiExternalResponse";
import { formatStringWithReplaceSlash } from "utils/format";

export class getDetailsService {
    execute( search: string ) {
        const http = new httpController();
        /// formata a string que vem na procura
        search = formatStringWithReplaceSlash(search);
        search = encodeURI(search);
        /// retorna o get da API
        return http
        .handle( new ExternalMovies() )
        .get<ApiExternalResponse>(`/search/multi?api_key=${process.env.REACT_APP_BASE_API_FILMES_KEY}&language=pt-BR&query=${search}&page=1&include_adult=false`);
    }
}