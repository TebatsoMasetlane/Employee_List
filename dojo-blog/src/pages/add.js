import { Link } from 'react-router-dom'
import addCSS from '../add.module.css'
import icon from "../assets/person-icon.png"
import Axios from 'axios'
import React, {useState} from "react";


const Add = () => {
    
    const[userName, setuserName] = useState('')
    const[email, setemail] = useState('')
    const [position, setposition] = useState('')

      const add= ()=>{
      Axios.post("http://localhost:3001/Add", {userName: userName, email: email, position: position})

    }
    return (
        <body className={addCSS.body}>
            <div className={addCSS.square}>    
            <div className={addCSS.Con}>
                <div className={addCSS.item}>
                    <img src={icon} className={addCSS.icon}alt='profile' style={{width: "300px;", height:"200px"}}/>
                </div>
             <div className={addCSS.myAdd} >
                    <form action="">
                        <div className={addCSS.details}>
                            <input className={addCSS.names} type="" name="" placeholder="Name and surname"onChange={(event) =>  setuserName(event.target.value)}/>
                        </div>
                         <div className={addCSS.details}>
                            <input className={addCSS.contact} type="" name="" placeholder="Email"onChange={(event) =>  setemail(event.target.value)} />
                        </div>
                        <div className={addCSS.details}>
                            <input className={addCSS.post} type="" name="" placeholder="Position"onChange={(event) =>  setposition(event.target.value)}/>
                        </div>
                        <button onClick={add} type ="submit" id={addCSS.add}>Add</button>
                    
                    </form>
                </div>
            </div>    
        </div>
       

    
    </body>

    );
}
export default Add;