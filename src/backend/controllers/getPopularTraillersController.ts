import { getPopularTraillersService } from "backend/services/getPopularTraillersService";

export class getPopularTraillersController {
    handle(movie_id : number){
        const service = new getPopularTraillersService();
        return service.execute(movie_id);
    }
}