import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    let profileId = props.profile && props.profile.userId;
    let profilePosts = [...props.posts].filter(p => p.postOnIdProfile === profileId);

    return (
        <div>
            <div className={profilePosts.length === 0 ? "inProfileNotPosts" : "profilePage"}>
                <ProfileInfo profile={props.profile} className={classes.classForProfileInfo}
                    status={props.status} updateStatus={props.updateStatus}
                    isOwner={props.isOwner} savePhoto={props.savePhoto}
                    saveProfile={props.saveProfile} />
            </div>
            <div className={classes.postsField}>
                <MyPostsContainer profilePosts={profilePosts} profileId={profileId}/>
            </div>
        </div>
    )
}
export default Profile;