import axios from "axios";
import { IApiTypes } from "backend/ApiTypesObjects/IApiTypes";

class httpService{
    execute( typeAPI : IApiTypes ){
        return axios.create({
            baseURL: `${typeAPI.GetApiUrl()}`
        });
    }
}

export { httpService }