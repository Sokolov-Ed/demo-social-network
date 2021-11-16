import Contact from "./Contact";

const ProfileData = ({ profile, isOwner, goToEditMode, editMode }) => {
    return (
        <div>
            <div>
                {isOwner && <button onClick={goToEditMode}>Edit</button>}
            </div>
            <div>About Me: {profile.aboutMe}</div>
            <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
            {profile.lookingForAJob && <div>My professional skills:
                {profile.lookingForAJobDescription}</div>}
            <div>Contacts: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} editMode={editMode}/>
            })}</div>
        </div>
    )
}

export default ProfileData;