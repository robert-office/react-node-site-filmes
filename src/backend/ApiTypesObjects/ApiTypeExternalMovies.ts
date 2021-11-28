import { IApiTypes } from "./IApiTypes";

/*
* Classe responsavel por guardar dados da API externa
*/
export class ExternalMovies implements IApiTypes {
    ApiUrl = String(process.env.REACT_APP_BASE_API_FILMES_URL);
    
    GetApiUrl(): string{
        return this.ApiUrl;
    }
}