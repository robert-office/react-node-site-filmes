import { getRecomendedToThisService } from "backend/services/external-api/getRecomendedToThisService";


export class getRecomendedToThisController {
    handle(movieOrTv : string, id: number){
        const service = new getRecomendedToThisService();
        return service.execute(movieOrTv, id);
    }
}