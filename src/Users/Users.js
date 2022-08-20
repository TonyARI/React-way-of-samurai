import styles from './users.module.css';

function Users(props) {
    if(props.users.length==0) {
        props.setUsers(
            [
                {id:1, photoUrl: 'https://www.blast.hk/attachments/68493/', followed: false, fullName: 'Dmitriy', status: 'I`m a boss', location: {city: 'Minsk', country: 'Belarus'}},
                {id:2, photoUrl: 'https://www.blast.hk/attachments/68493/', followed: true, fullName: 'Sasha', status: 'I`m a boss too', location: {city: 'Moscow', country: 'Russia'}},
                {id:3, photoUrl: 'https://www.blast.hk/attachments/68493/', followed: false, fullName: 'Andrew', status: 'I`m a boss too', location: {city: 'Kiev', country: 'Ukraine'}}
            ]
              )
    }
    return <div>
        {
            props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed? 
                        <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                  <span>
                      <div>{u.fullName}</div>
                      <div>{u.status}</div>
                  </span>
                  <span>
                      <div>{u.location.country}</div>
                      <div>{u.location.city}</div>
                 </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;