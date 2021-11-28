import { IApiTypes } from "./IApiTypes";

/*
* Classe responsavel por guardar dados da API central feita
* em Laravel
*/
export class LaravelApi implements IApiTypes {
    ApiUrl = String(process.env.REACT_APP_BASE_API_URL);
    
    GetApiUrl(): string{
        return this.ApiUrl;
    }
}