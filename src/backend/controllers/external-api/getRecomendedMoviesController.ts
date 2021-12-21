import { getRecomendedMoviesService } from "backend/services/external-api/getRecomendedMoviesService";


export class getRecomendedMoviesController {
    handle(page: number = 1){
        const service = new getRecomendedMoviesService();
        return service.execute(page);
    }
}