import { getPopularMoviesService } from "backend/services/getPopularMoviesService";

export class getPopularMoviesController {
    handle(){
        const service = new getPopularMoviesService();
        return service.execute();
    }
}