import { getGenreService } from "backend/services/getGenreService";

export class getGenresController {
    handle(movieOrTv: string){
        const service = new getGenreService();
        return service.execute(movieOrTv);
    }
}