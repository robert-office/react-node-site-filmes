import { LaravelApi } from "backend/ApiTypesObjects/ApiTypeLaravel";
import { httpController } from "backend/controllers/htppController";


export class postCadastroService {
    execute(data: string) {
        const http = new httpController();
        
        const config = {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            }
        }

        return http
        .handle( new LaravelApi )
        .post("/register", data, config);
    }
}
