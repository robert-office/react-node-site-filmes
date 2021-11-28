import { getRecomendedMoviesService } from "backend/services/getRecomendedMoviesService";


export class getRecomendedMoviesController {
    handle(){
        const service = new getRecomendedMoviesService();
        return service.execute();
    }
}