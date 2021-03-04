import axios from "axios";
import Axios from "./axiosservice";
import {connect} from 'react-redux'


const axiosService = new Axios()

class LmsService {
    
    loginlms = (data) =>{
        return axiosService.Post('login/',data)
    }
    getdashboard = ()=>{
        return axiosService.Get()
    }
    getmentordetails=(token)=>{
        return axiosService.Get('mentor-details/',token)
    }
    getcoursedetails = (token)=>{
        return axiosService.Get('courses/',token)
    }
}
const mapStateToProps = (state) => {
    return {
      token: state.state,
    };
  };
  export default LmsService