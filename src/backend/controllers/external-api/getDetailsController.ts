import { getDetailsService } from "backend/services/external-api/getDetailsService";

export class getDetailsController {
    handle(search: string){
        const service = new getDetailsService();
        return service.execute(search);
    }
}