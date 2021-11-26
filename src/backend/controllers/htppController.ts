import { httpService } from "../services/httpService";

class httpController {
    
    handle(){
        const service = new httpService();
        return service.execute();
    }
}

export { httpController };