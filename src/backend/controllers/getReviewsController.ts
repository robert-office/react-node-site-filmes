import { getReviewsService } from "backend/services/getReviewsService";

export class getReviewsController {
    handle(movieOrTv: string, id: number){
        const service = new getReviewsService();
        return service.execute(movieOrTv, id);
    }
}