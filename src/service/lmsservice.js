import Axios from "./axiosservice";

const axiosService = new Axios()

export default class LmsService {
    
    loginlms = (data) =>{
        return axiosService.Post('login/',data)
    }
}