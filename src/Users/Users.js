import { NavLink } from 'react-router-dom';
import s from './users.module.css';

let Users=(props)=>{
    let pageCount=Math.ceil(props.totalUsersCount/props.pageSize);
    let pages=[];
    for(let i=1; i<=11; i++) {
        pages.push(i);
    }
    return(
        <div>
        {pages.map(thisPage=>{
            return <span onClick={(e)=>props.pageChange(thisPage)} className={thisPage===props.currentPage ?s.Page+" "+s.activePage:s.Page}>{thisPage}</span>
        })}
        {
                props.users.map(u=><div className="item" key={u.id}>
                <div>
                    <div>
                        <NavLink to={"/profile/"+u.id}>
                            <img src={u.photos.small?u.photos.small:"https://illustrators.ru/uploads/illustration/image/1232594/%D1%8B%D1%8B%D1%8B%D1%8B.png"} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed? 
                        <button className="btn" style={{padding: "8px"}} disabled={props.toggleFollowingInProgress.some(id=>id===u.id)} onClick={()=>
                            {props.unfollow(u.id)} }>Unfollow</button>
                        : <button className="btn" style={{padding: "8px"}} disabled={props.toggleFollowingInProgress.some(id=>id===u.id)} onClick={()=>
                            { props.follow(u.id)}}>Follow</button>}
                    </div>
                </div>
                <div>
                  <div>
                      <div>{u.name}</div>
                      <div>{u.status? u.status: "no status"}</div>
                  </div>
                </div>
            </div>)
        }
    </div>
    )
}

export default Users;