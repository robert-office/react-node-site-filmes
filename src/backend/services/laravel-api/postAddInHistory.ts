import { LaravelApi } from "backend/ApiTypesObjects/ApiTypeLaravel";
import { httpController } from "backend/controllers/htppController";

export class postAddInHistory {
    execute(token: string, type?: number, ad_content?: string) {
        const http = new httpController();
        const data = {
            type: type,
            ad_content: ad_content
        };

        const config = {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        return http
        .handle( new LaravelApi() )
        .post("/histoy/add", JSON.stringify(data), config);
    }
}