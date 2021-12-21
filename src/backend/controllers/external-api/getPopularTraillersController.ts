import { getPopularTraillersService } from "backend/services/external-api/getPopularTraillersService";

export class getPopularTraillersController {
    handle(movie_id : number,  movieOrTv: string){
        const service = new getPopularTraillersService();
        return service.execute(movie_id,  movieOrTv);
    }
}