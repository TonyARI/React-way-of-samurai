import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import {faIdCard} from '@fortawesome/free-regular-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';



function Nav(props) {
   
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={navData=>navData.isActive?s.links+" "+s.active:s.links}><FontAwesomeIcon icon={faIdCard} className={s.icon}/>Profile</NavLink>
            </div>
            <div className={s.item}  >
                <NavLink to='/dialogs' className={navData=>navData.isActive?s.links+" "+s.active:s.links}><FontAwesomeIcon icon={faEnvelope} className={s.icon}/>Messages</NavLink>
            </div>
            <div className={s.item}  >
                <NavLink to='/users' className={navData=>navData.isActive?s.links+" "+s.active:s.links}><FontAwesomeIcon icon={faUser} className={s.icon}/>Users</NavLink>
            </div>
      </nav>
    )
}

export default Nav