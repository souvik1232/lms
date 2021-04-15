import {Router, Route } from 'react-router-dom';
import history from './component/history'
import React, { Suspense } from 'react'
import './router.scss'
import Login from './component/login/login'
import Dashboard from './component/dashboard/dashboard'
import mentor from './component/mentor/mentor';
import home from './component/home/home';
import student from './component/student/student';
import course from './component/course/course';
import mentordetails from './component/mentordetails/mentordetails'
import dashboard1 from './component/dashboard-unique/dashboardunique'
import studentdetail from './component/studentdetail/studentdetail';
import PrivateRoute from './component/privateroute/privateroute';
import AuthRoute from './component/authroute/authroute';

// const Login = React.lazy(()=>import('./component/login/login'));
// const Dashboard = React.lazy(()=>import('./component/dashboard/dashboard'));
// const mentor = React.lazy(()=>import('./component/mentor/mentor'));
// const home = React.lazy(()=>import('./component/home/home'));
// const student = React.lazy(()=>import('./component/student/student'));
// const course = React.lazy(()=>import('./component/course/course'));
// const mentordetails = React.lazy(()=>import('./component/mentordetails/mentordetails'));
// const dashboard1 = React.lazy(()=>import('./component/dashboard-unique/dashboardunique'));
// const studentdetail = React.lazy(()=>import('./component/studentdetail/studentdetail'));

function RRouter() {
    return (
        <Router history={history}>
          {/* <Suspense fallback={<div className='loader'></div>}> */}
          <div>
            <AuthRoute path="/login" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/dashboard/home" component={home} />
            <PrivateRoute path="/dashboard/mentor" component={mentor} />
            <PrivateRoute path="/dashboard/student" component={student} />
            <PrivateRoute path="/dashboard/course" component={course} />
            <PrivateRoute path="/dashboard/details" component={mentordetails} />
            <PrivateRoute exact path="/dashboard/studentdetails" component={studentdetail} />
            <PrivateRoute exact path="/dashboard/mentorcoursedetails" component={dashboard1} />
          </div>
          {/* </Suspense> */}
        </Router>
    );
  }
  
  export default RRouter;