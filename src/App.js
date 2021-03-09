// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Login from './component/login/login'
import Dashboard from './component/dashboard/dashboard'
import mentor from './component/mentor/mentor';
import home from './component/home/home';
import student from './component/student/student';
import course from './component/course/course';
import mentordetails from './component/mentordetails/mentordetails'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Switch> */}
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/home" component={home} />
          <Route path="/dashboard/mentor" component={mentor} />
          <Route path="/dashboard/student" component={student} />
          <Route path="/dashboard/course" component={course} />
          <Route path="/dashboard/details" component={mentordetails} />


          {/* </Switch> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
