import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import mine from '../assets/Tebatso Masetlane.jpg'
import employeeCSS from '../employees.module.css'
import Axios from 'axios'



const EmployeeID = () =>

{
    const[userName, setuserName] = useState('')
    const[email, setemail] = useState('')
    const [position, setposition] = useState('')
    
    const[empList,setempList] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/read").then((response)=>{
            setempList(response.data)
        })
    }, [])

    const deleteEmp = (id)  => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
    }

    return(

    <body>
        <h1>OUR TEAM MEMBERS</h1>
       <div className={employeeCSS.employeeList}>
        
        {empList.map((val,key)=>{
            return (
                <div className={employeeCSS.flexContainer}>
                <img src={mine} alt="pic"/>
                <h2>{val.userName}</h2>
                <p className={employeeCSS.title}>{val.position}</p>
                <p className={employeeCSS.email}>{val.email}</p>
                <div className={employeeCSS.buttons}>
                <Link to={"/update"}><p><button className={employeeCSS.btnEdit}>edit</button></p></Link>
                    <p><button onClick={()=> deleteEmp(val._id)} className={employeeCSS.btnDelete}>delete</button></p>
                </div>
            </div>
            )
        })}
      
    </div>

    <Link to={"/add"}><button className={employeeCSS.btnAdd}>Add Member</button></Link>

    </body>
    );

} 
export default EmployeeID;