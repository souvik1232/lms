import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/login/login'
import Dashboard from './component/dashboard/dashboard'
import mentor from './component/mentor/mentor';
import home from './component/home/home';
import student from './component/student/student';
import course from './component/course/course';
import mentordetails from './component/mentordetails/mentordetails'
import dashboard1 from './component/dashboard-unique/dashboardunique'
import PrivateRoute from './component/privateroute/privateroute';
import AuthRoute from './component/authroute/authroute';

function RRouter() {
    return (
        <Router>
          <div>
            {/* <Switch> */}
            <AuthRoute path="/login" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/dashboard/home" component={home} />
            <PrivateRoute path="/dashboard/mentor" component={mentor} />
            <PrivateRoute path="/dashboard/student" component={student} />
            <PrivateRoute path="/dashboard/course" component={course} />
            <PrivateRoute path="/dashboard/mentor/details" component={mentordetails} />
            <PrivateRoute exact path="/dashboard/home/mentorcoursedetails" component={dashboard1} />
  
  
            {/* </Switch> */}
          </div>
        </Router>
    );
  }
  
  export default RRouter;