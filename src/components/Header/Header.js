import classes from './Header.module.css';

function Header(props) {
    console.log(props)
    return  (
    <header className={classes.header}>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/>
        {props.isAuth.isAuth?<div className={classes.login}>{props.isAuth.login}</div>:<div className={classes.login}>Login</div>}
    </header>
    )
}

export default Header;