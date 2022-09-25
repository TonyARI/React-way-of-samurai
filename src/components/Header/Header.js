import Nav from '../Nav/Nav';
import s from './Header.module.css';

function Header(props) {
    console.log(props)
    return  (
    <header className={s.header}>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/>
        <div className={s.right_content}>
            <Nav/>
            {props.isAuth.isAuth?<div className={s.login}>{props.isAuth.login}</div>:<div className={s.login}>Login</div>}
        </div>
    </header>
    )
}

export default Header;