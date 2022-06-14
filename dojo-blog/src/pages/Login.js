import image from '../assets/bg.jpg';
import img from '../assets/person-icon.png'
import LoginCSS from '../login.module.css';
import {Link} from 'react-router-dom';

const Login = () =>{
    
    return(
    <form class="box-login"  method="post">
        <h1>Welcome Back!</h1>
        
        <img src={img} id={LoginCSS.icon} width="50" height="50"/>
        <input type="text" name="" placeholder="Username"/>
        
        <input type="password" name="" placeholder="Password"/>
        
        <span class="psw">Forgot <a href="#">Password?</a></span>
        <Link to={"/employeesID"}><input type ="submit" name="" value="Login"/></Link>
        
        <p>Need an account? <Link to={"/register"}> SIGN UP</Link></p>
        
    </form>
        
    );

}
 export default Login;
