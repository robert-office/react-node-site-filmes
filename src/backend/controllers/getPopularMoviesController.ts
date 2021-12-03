import { getPopularMoviesService } from "backend/services/getPopularMoviesService";

export class getPopularMoviesController {
    handle(page: number = 1){
        const service = new getPopularMoviesService();
        return service.execute(page);
    }
}