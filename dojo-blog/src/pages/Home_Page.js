import backG from '../assets/homebackground.png'
import { NavLink } from 'react-router-dom'
import home from '../Home.module.css'
import { Link } from 'react-router-dom'

const Home_page = () => {
    return (

        <body id={home.home}>
            <div className={home.main}>
                <div className={home.navbar}>
                    <div className={home.icon}>
                        <h2 className={home.logo}>Book Education</h2>
                    </div>
                    <div className={home.menu}>
                        <ul>
                            <li><Link to={"/home"}>Home</Link></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className={home.search}>
                        <input className={home.srch} type="search" name="srch" placeholder="Type To Text" />
                        <a href="#"><button className={home.btn}>Search</button></a>
                    </div>
                </div>
            </div>
            <div className={home.content}>

            <h1>Shop<br/><span>Books</span> <br/><span>Online</span></h1>

            </div>
            <div className={home.buttons}>
                  <Link to={"/"}><input type="submit" name="" value="Login " id={home.send} /></Link>
                  <Link to={"/register"}><input type="submit" name="" value="Register " id={home.reg} /></Link>
            </div>

        </body>



    );

}
export default Home_page;