import axios from "axios"

const BASE_URL = "http://localhost:8080/user/getUserById/1";

class AccountInfoService{

    getUserInfo(){
        return axios.get(BASE_URL);
    }

}

export default new AccountInfoService()