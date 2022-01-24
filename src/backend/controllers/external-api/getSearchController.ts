import { getSearchService } from "backend/services/external-api/getSearchService";


export class getSearchController {
    handle(page: number = 1, search: string){
        const service = new getSearchService();
        return service.execute(page, search);
    }
}