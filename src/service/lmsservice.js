import axios from "axios";
import Axios from "./axiosservice";
import { connect } from 'react-redux'


const axiosService = new Axios()

class LmsService {

    loginlms = (data) => {
        return axiosService.Post('login/', data)
    }
    getdashboard = () => {
        return axiosService.Get()
    }
    getmentordetails = (token) => {
        return axiosService.Get('mentor-details/', token)
    }
    getcoursedetails = (token) => {
        return axiosService.Get('courses/', token)
    }
    addcourse = (token, data) => {
        return axiosService.POST('course/', data, token)
    }
    addmentor = (token, data) => {
        return axiosService.POST('mentor/', data, token)
    }
}
export default LmsService