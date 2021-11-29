import { getDetailsService } from "backend/services/getDetailsService";

export class getDetailsController {
    handle(search: string){
        const service = new getDetailsService();
        return service.execute(search);
    }
}