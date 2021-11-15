import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    return (
        <div className="mainContent">
            <ProfileInfo profile={props.profile} className={classes.classForProfileInfo}
                status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;