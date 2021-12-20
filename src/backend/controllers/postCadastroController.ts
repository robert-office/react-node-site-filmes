import { postCadastroService } from "backend/services/postCadastroService";

export class postCadastroController {
    handle(data: string){
        const service = new postCadastroService();
        return service.execute(data);
    }
}
