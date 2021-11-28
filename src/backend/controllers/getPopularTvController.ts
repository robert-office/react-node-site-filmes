import { getPopularTvService } from "backend/services/getPopularTvService";

export class getPopularTvController {
    handle(){
        const service = new getPopularTvService();
        return service.execute();
    }
}