import { postCadastroService } from "backend/services/laravel-api/postCadastroService";

export class postCadastroController {
    async handle(data: string){
        const service = new postCadastroService();
        return await service.execute(data);
    }
}