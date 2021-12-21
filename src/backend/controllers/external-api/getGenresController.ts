import { getGenreService } from "backend/services/external-api/getGenreService";

export class getGenresController {
    handle(movieOrTv: string){
        const service = new getGenreService();
        return service.execute(movieOrTv);
    }
}