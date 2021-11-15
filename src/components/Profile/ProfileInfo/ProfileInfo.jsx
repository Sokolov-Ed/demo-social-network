import classes from './ProfileInfo.module.css';
import DefaultIcon from './../../../icons/default_icon_user.png';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return (
            <Preloader />
        )
    }
    else {
        return (
            <div className={classes.profileInfo}>
                <div className={classes.descriptionBlock}>
                    <img src={profile.photos.small != null ? profile.photos.small : DefaultIcon} className={classes.photoUser}/>
                    <div className={classes.userName}>{profile.fullName}</div>
                </div>
                <div className={classes.aboutUser}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <div>About Me:</div>
                    <div>{profile.aboutMe}</div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;