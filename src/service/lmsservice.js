import Axios from "./axiosservice";
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
    getstudentdetails = (token) => {
        return axiosService.Get('students/', token)
    }
    addcourse = (token, data) => {
        return axiosService.POST('course/', data, token)
    }
    addmentor = (token, data) => {
        return axiosService.POST('mentor/', data, token)
    }
    addstudent = (token, data) => {
        return axiosService.POST('students/', data, token)
    }
    deletestudent = (token,id) =>{
        return 
    }
}
export default LmsService