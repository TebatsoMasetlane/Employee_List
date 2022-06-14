import bground from '../assets/bg.jpg';
import register from '../Register.module.css';
import Axios from 'axios'
import undraw from '../assets/undraw_email.svg'
import {Link} from 'react-router-dom';
import React, {useState} from "react";

const REGISTER = () =>
{
  const[userName, setuserName] = useState('')
  const[email, setemail] = useState('')
  const [password, setpassword] = useState('')

    const reg= ()=>{
    Axios.post("http://localhost:3001/create", {userName: userName, email: email, password: password})
  }

return(
 <body>
    <div class={register.left}>
    <div class={register.register}>
       Please fill in this form to Create an Account
      </div>
     </div>

     <form class={register.box} >
        <input type="text" name="" placeholder="Username"id={register.button} onChange={(event) =>  setuserName(event.target.value)}/>
        <input type="text" name="" placeholder="Email" onChange={(event) => 
          setemail(event.target.value)}/>
        <input type="password" name="" placeholder="Password" onChange={(event) => 
          setpassword(event.target.value)}/>
         <p>Already a User? <Link to={"/"} id={register.login}> LOGIN </Link></p>
         <button onClick={reg} type ="submit" name="" id={register.Register}>Sign Up</button>

         
      </form>

     <img src={undraw} id={undraw}/>

   </body>
 );
}
export default REGISTER;