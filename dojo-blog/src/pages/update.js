
import { Link } from 'react-router-dom'
import UpdateCSS from '../update.module.css'
import profile from "../assets/Tebatso Masetlane.jpg"

const Update = () => {

    return (
        <body className={UpdateCSS.body}>
            <div className={UpdateCSS.container}>    
            <div className={UpdateCSS.flexCon}>
                <div className={UpdateCSS.flexitem}>
                    <img src={profile} alt='profile' style={{width: "400px;", height:"350px"}}/>
                </div>
             <div className={UpdateCSS.myform} >
                    <form action="">
                        <div className={UpdateCSS.formcontrol}>
                            <input className={UpdateCSS.name} type="" name="" placeholder="Name and surname"/>
                        </div>
                         <div className={UpdateCSS.formcontrol}>
                            <input className={UpdateCSS.email} type="" name="" placeholder="Email" />
                        </div>
                        <div className={UpdateCSS.formcontrol}>
                            <input className={UpdateCSS.position} type="" name="" placeholder="Position"/>
                        </div>
                        <button type ="submit" id={UpdateCSS.update}>Update</button>
                    
                    </form>
                </div>
            </div>    
        </div>
       

    
    </body>

    );
}
export default Update;
