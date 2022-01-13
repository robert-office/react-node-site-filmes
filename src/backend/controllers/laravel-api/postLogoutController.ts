import { postLogoutService } from "backend/services/laravel-api/postLogoutService";

export class postLogoutController {
    async handle(token: string){
        const service = new postLogoutService();
        return await service.execute(token);
    }
}