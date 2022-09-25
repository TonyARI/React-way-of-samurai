import classes from './Post.module.css';

function Post(props) {
    return (
        <div className="item">
            <img style={{width: "40px", height: "40px"}} src="https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380" alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;