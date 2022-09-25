import { Navigate } from 'react-router-dom';
import Preloader from '../../Common/Prealoader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

function ProfileInfo(props) {
    if(!props.profile) {
      return <Preloader/>
    }
    
    return (
        <div className="section">
          <div className={s.profile_container}>
            <div>
              <div>
                {<img className={s.profile_photo} src={props.profile.photos.large|| "https://gravatar.com/avatar/d174f4d5b58b238a577a52c62fed8373?s=28&d=https%3A%2F%2Fpixabay.com%2Fstatic%2Fuploads%2Fphoto%2F2012%2F04%2F26%2F19%2F43%2Fprofile-42914_640.png}"}/> }
              </div>
              <div className={s.descriptionBlock}>
                  <div className={s.name}>
                    {props.profile.fullName}
                  </div>
                  <div className={s.about}>
                    {props.profile.aboutMe}
                  </div>
                <ProfileStatus className={s.status} status={props.status} updateStatus={props.updateStatusThunk}/>
              </div>
            </div>
            <div className={s.about_user}>
              <h1 className={s.about_user_title}>About user</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ex tenetur commodi quae autem? Non, magnam nihil fuga assumenda tenetur laboriosam qui explicabo consectetur, ex, velit blanditiis tempore quis repellendus!</p>
            </div>
          </div>
        </div>
    )
}

export default ProfileInfo;