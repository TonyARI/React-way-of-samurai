import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileContainer from './ProfileInfo/ProfileContainer';

 

function Profile(props) {
    return (
        <div>
          <ProfileContainer />
          <MyPostsContainer/>
        </div>
    )
}

export default Profile;