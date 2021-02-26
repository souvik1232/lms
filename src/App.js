import logo from './logo.svg';
import {BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import './App.scss';
import Login from './component/login/login'
import Dashboard from './component/dashboard/dashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Switch> */}
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          {/* </Switch> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
