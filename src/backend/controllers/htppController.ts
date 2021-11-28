import { IApiTypes } from "backend/ApiTypesObjects/IApiTypes";
import { httpService } from "../services/httpService";

class httpController {
    
    handle( ApiObj : IApiTypes ){
        const service = new httpService();
        return service.execute( ApiObj );
    }
}

export { httpController };