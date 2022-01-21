import { postUpdateUserService } from './../../services/laravel-api/postUpdateUserService';
import { postUpdateImgService } from "backend/services/laravel-api/postUpdateImgService";

export class postUserController {
    async updateImg(token: string, img: FormData) {

        const service = new postUpdateImgService();
        return await service.execute(token, img);
    }

    async updateInfos(token: string, data: string) {

        const service = new postUpdateUserService();
        return await service.execute(token, data);
    }
}