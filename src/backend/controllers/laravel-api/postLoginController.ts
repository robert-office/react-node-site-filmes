import { postLoginService } from "backend/services/laravel-api/postLoginService";

export class postLoginController {
    async handle(data: string){
        const service = new postLoginService();
        return await service.execute(data);
    }
}