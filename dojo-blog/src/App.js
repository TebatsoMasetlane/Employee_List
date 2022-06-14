//import logo from './logo.svg';
import './App.css'
import Login from './pages/Login.js'
 import REGISTER from './pages/REGISTER'
import EmployeeID from './pages/employeeID'
import Home_page from './pages/Home_Page'
import Update from './pages/update'
import Add from './pages/add'
import React from "react"
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'


function App() {
  return (

  
    <div className="App">
     
     
     
        {/* <nav>
          <ul>
            <li>
              <Link to="/home">Home_page</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/employeesID">employeesID</Link>
            </li>
            <li>
              <Link to="/update">Update</Link>
            </li>
          </ul>
        </nav>  

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Router>
        <Switch>
        <Route exact path="/update"><Update/></Route>
        <Route exact path="/add"><Add/></Route>
         <Route exact path="/home" ><Home_page/></Route>
        <Route exact path="/" ><Login/></Route> 
        <Route exact path="/register" ><REGISTER/></Route>
        <Route exact path="/employeesID" ><EmployeeID/></Route> 
        
        </Switch>
     
    </Router>
    </div>
  );
}

{/* function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
} */}
export default App;
