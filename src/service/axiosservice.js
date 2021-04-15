import axios from "axios";
const baseurl="https://lms-dev.incubation.bridgelabz.com/user/"
const baseurl1="https://lms-dev.incubation.bridgelabz.com/management/"

export default class Axios{
    Post(url,data){
        // console.log(token);
        return axios.post(baseurl+url,data)
    }
    POST(url,data,token){
        return axios.post(baseurl1+url,data,{
            headers: {
                'Authorization': token, 
            }
        })
    }
    PUT(url,data,token){
        return axios.put(baseurl1+url,data,{
            headers: {
                'Authorization': token, 
            }
        })
    }
    Get(url,token){
        return axios.get(baseurl1+url,{
            headers: {
                'Authorization': token, 
            }
        })
    }
    Delete(url,id,token){
        return axios.delete(baseurl1+url,id,{
            headers: {
                'Authorization': token, 
            }
        })
    }
}