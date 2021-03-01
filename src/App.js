import logo from './logo.svg';
import {BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import './App.scss';
import Login from './component/login/login'
import Dashboard from './component/dashboard/dashboard'
import mentor from './component/mentor/mentor';
import home from './component/home/home';
import student from './component/student/student';
import course from './component/course/course';

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
          {/* </Switch> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
