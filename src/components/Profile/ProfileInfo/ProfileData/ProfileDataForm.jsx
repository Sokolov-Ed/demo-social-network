import Contact from "./Contact";
import { reduxForm, Field } from "redux-form";
import { Input } from "../../../Common/FormsControls/FormsControls";

const ProfileDataForm = ({ profile, handleSubmit, editMode, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>Full name: <Field placeholder={"Full name"} name="fullName" component={"input"}/>
            </div>
            <div>About Me: <Field placeholder={"About me"} name="aboutMe" component={"textarea"}/>
            </div>
            <div>Looking for a job: <Field name="lookingForAJob" component={"input"} type="checkbox"/></div>
            <div>My professional skills: <Field placeholder={"My professional skills"} name="lookingForAJobDescription" component={"textarea"}/></div>
            <div>Contacts: {Object.keys(profile.contacts).map(key => {
                return <Contact error={error} key={key} contactTitle={key} contactValue={profile.contacts[key]} editMode={editMode} name={"contacts." + key}/>
            })}</div>
            <div>
                <button>Save</button>
                {error && <div>{error}</div>}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm)

const EditProfileData = (props) => {
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            props.exitOfEditMode();
        });
    }
    return (
        <ProfileDataReduxForm onSubmit={onSubmit} {...props}/>
    )
}
export default EditProfileData;