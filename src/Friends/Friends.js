 import s from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItems';

function Friends(props) {
    let FriendsItems=props.friends.map((friend)=>{
        return <FriendsItem src={friend.ava} name={friend.name} />
    })
    return(
        <div className={s.inner}>
            <h1>FRIENDS</h1>
            <div className={s.flexInner}>
                {FriendsItems}
            </div>
        </div>
    )
}

export default Friends; 