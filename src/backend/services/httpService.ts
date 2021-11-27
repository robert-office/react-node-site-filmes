import axios from "axios";

class httpService{
    execute(){
        return axios.create({
            baseURL: `${process.env.REACT_APP_BASE_API_URL}/api`
        });
    }
}

export { httpService }