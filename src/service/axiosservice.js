import axios from "axios";
const baseurl="https://lms-dev.incubation.bridgelabz.com/user/"

export default class Axios{
    Post(url,data){
        // console.log(token);
        return axios.post(baseurl+url,data)
    }
}