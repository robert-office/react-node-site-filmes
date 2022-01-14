import { getFavoritesService } from "backend/services/laravel-api/getFavoritesService";

export class getFavoritesController {
    async handle(token: string){
        const service = new getFavoritesService();
        return await service.execute(token);
    }
}