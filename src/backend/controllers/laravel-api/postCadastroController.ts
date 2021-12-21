import { postCadastroService } from "backend/services/laravel-api/postCadastroService";

export class postCadastroController {
    handle(data: string){
        const service = new postCadastroService();
        return service.execute(data);
    }
}
