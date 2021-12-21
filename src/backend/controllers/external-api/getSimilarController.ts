import { getSimilarService } from "backend/services/external-api/getSimilarService";

export class getSimilarController {
    handle(movieOrTv : string, id: number){
        const service = new getSimilarService();
        return service.execute(movieOrTv, id);
    }
}