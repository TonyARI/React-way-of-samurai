import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';
import s from './Header.module.css';

function Header(props) {
    return  (
    <header className={s.header}>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/>
        <div className={s.right_content}>
            <Nav/>
            {props.isAuth.isAuth?
            <div className={s.login}>{props.isAuth.login}<button className='btn' style={{display: "block", padding: "2px"}} onClick={props.logoutMeThunk}>Logout</button></div>:
            <div className={s.login}><NavLink to="/login">Login</NavLink></div>
            }
        </div>
    </header>
    )
}

export default Header;