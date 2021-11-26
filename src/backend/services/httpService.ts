import axios from "axios";

class httpService{
    execute(){
        return axios.create({
            baseURL: '/api'
        });
    }
}

export { httpService }