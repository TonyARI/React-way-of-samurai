import Preloader from '../../Common/Prealoader';
import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
    if(!props.profile) {
      return <Preloader/>
    }
    return (
        <div>
          <div>
             {<img src={props.profile.photos.large}/> }
          </div>
          <div className={classes.descriptionBlock}>
            {props.profile.fullName}<br/>
            {props.profile.aboutMe}
          </div>
        </div>
    )
}

export default ProfileInfo;