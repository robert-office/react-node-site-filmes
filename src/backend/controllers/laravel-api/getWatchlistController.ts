import { getWatchlistService } from "backend/services/laravel-api/getWatchlistService";

export class getWatchlistController {
    async handle(token: string){
        const service = new getWatchlistService();
        return await service.execute(token);
    }
}