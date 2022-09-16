import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header/Header';
import styles from './users.module.css';
import {UserAPI} from '../components/API/api'

let Users=(props)=>{
    let pageCount=Math.ceil(props.totalUsersCount/props.pageSize);
    let pages=[];
    for(let i=1; i<=11; i++) {
        pages.push(i);
    }
    return(
        <div>
        {pages.map(thisPage=>{
            return <span onClick={(e)=>props.pageChange(thisPage)} className={thisPage===props.currentPage && styles.activePage}>{thisPage}</span>
        })}
        {
                props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/"+u.id}>
                            <img src={u.photos.small?u.photos.small:"https://illustrators.ru/uploads/illustration/image/1232594/%D1%8B%D1%8B%D1%8B%D1%8B.png"} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed? 
                        <button disabled={props.toggleFollowingInProgress.some(id=>id===u.id)} onClick={()=>
                            {props.unfollow(u.id)} }>Unfollow</button>
                        : <button disabled={props.toggleFollowingInProgress.some(id=>id===u.id)} onClick={()=>
                            { props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                  <span>
                      <div>{u.name}</div>
                      <div>{u.status? u.status: "no status"}</div>
                  </span>
                </span>
            </div>)
        }
    </div>
    )
}

export default Users;