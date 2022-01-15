import { LaravelApi } from "backend/ApiTypesObjects/ApiTypeLaravel";
import { httpController } from "backend/controllers/htppController";

export class getRemoveFavorite {
    execute(token: string, data: string) {
        const http = new httpController();
        
        const config = {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        const dataJson = JSON.parse(data);
        const id = dataJson.id_movie;

        return http
        .handle( new LaravelApi() )
        .get(`/favorites/delete/${id}`, config);
    }
}