 import classes from '../Friends.module.css'

function FriendsItem(props) {
    return (
        <div>
            <img src={props.src}/>
            <p>{props.name}</p>
        </div>
    )
}

export default FriendsItem; 