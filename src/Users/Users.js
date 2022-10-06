import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './users.module.css';

let Users=(props)=>{
    let pageCount=Math.ceil(props.totalUsersCount/props.pageSize);
    let pages=[];
    for(let i=1; i<=pageCount; i++) {
        pages.push(i);
    }

    let [number, setNumber]=useState(0);
    let rightBorder=number+10;
    let leftBorder=number+1
    let nextPage=()=>{
        setNumber(number+=10);
    }
    let prevPage=()=>{
        setNumber(number-=10)
    }

    return(
        <div>
            {leftBorder>1&&<button style={{padding: "4px"}} className='btn' onClick={prevPage}>Prev</button>}
        {pages.map(thisPage=>{
            if(thisPage<=rightBorder&&thisPage>=leftBorder){
                return <span onClick={(e)=>props.pageChange(thisPage)} className={thisPage===props.currentPage ?s.Page+" "+s.activePage:s.Page}>{thisPage}</span>
            }
        })}
        {number+10<pages.length&&<button  style={{padding: "4px"}} className='btn' onClick={nextPage}>Next</button>}
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