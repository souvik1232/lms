import axios from "axios";
const baseurl="https://lms-dev.incubation.bridgelabz.com/user/"
const baseurl1="https://lms-dev.incubation.bridgelabz.com/management/"

export default class Axios{
    Post(url,data){
        // console.log(token);
        return axios.post(baseurl+url,data)
    }
    Get(url,token){
        console.log(token);
        return axios.get(baseurl1+url,{
            headers: {
                'Authorization': token,
                
            }
        })
    }
}