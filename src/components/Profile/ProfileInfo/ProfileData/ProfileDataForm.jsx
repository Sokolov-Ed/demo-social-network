import Contact from "./Contact";

const ProfileDataForm = ({ profile, exitOfEditMode }) => {
    return (
        <div>
            <div>About Me: {profile.aboutMe}</div>
            <div>Looking for a job: {profile.lookingForJob ? "yes" : "no"}</div>
            {profile.lookingForJob && <div>My professional skills:
                {profile.lookingForAJobDescription}</div>}
            <div>Contacts: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}</div>
            <div>
                <button onClick={exitOfEditMode}>Save</button>
            </div>
        </div>
    )
}

export default ProfileDataForm;