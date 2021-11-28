/*
* Interface necessária para inversão de dependencia
* Para total controle de e pontecialização de crescimento
* De novas API's
*/

export interface IApiTypes {
    ApiUrl : string,
    GetApiUrl: () => string
}