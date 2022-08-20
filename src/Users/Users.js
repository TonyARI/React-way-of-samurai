import * as axios from 'axios';
import styles from './users.module.css';

function Users(props) {
    let getUsers=()=>{ axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
        if(props.users.length===0) {
            props.setUsers(response.data.items);
        }
    })}
    
    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small?u.photos.small:"https://illustrators.ru/uploads/illustration/image/1232594/%D1%8B%D1%8B%D1%8B%D1%8B.png"} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed? 
                        <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
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
}

export default Users;