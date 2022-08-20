
import classes from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
          <div>
           <img src="https://www.ixbt.com/img/n1/news/2021/10/2/22459ff25f8eff76bddf34124cc2c85b16f4cd4a_large.jpg" alt=""/>
          </div>
          <div className={classes.descriptionBlock}>
            ava+description
          </div>
        </div>
    )
}

export default ProfileInfo;