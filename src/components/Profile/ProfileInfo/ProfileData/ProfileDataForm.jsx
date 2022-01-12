import Contact from "./Contact";
import { reduxForm, Field } from "redux-form";
import { Input, Textarea } from "../../../Common/FormsControls/FormsControls";
import classes from "./ProfileData.module.css";
import AboutMe from "../../../../icons/aboutMe.png";
import Skills from "../../../../icons/skills.png";
import FullName from "../../../../icons/fullName.png";
import JobSearch from '../../../../icons/jobSearch.png';
import { required, maxLengthCreator } from "../../../../Utils/Validators/Validator";

const maxLength300 = maxLengthCreator(300);
const maxLength75 = maxLengthCreator(75);

const ProfileDataForm = ({ profile, handleSubmit, editMode, error, exitOfEditMode }) => {
    return (
        <div className={classes.profileDataEdit}>
            <form onSubmit={handleSubmit}>
                <div className={classes.mainInformationEdit}>
                    <div className={classes.informationEdit}>
                        <img src={FullName} />
                        <div className={classes.imgTitle}>My full name</div>
                        <Field placeholder="Full name" name="fullName" component={Input} 
                            validate={[required, maxLength75]} className={classes.inputFullName}/>
                    </div>
                    <div className={classes.informationEdit}>
                        <img src={JobSearch} />
                        <div className={classes.imgTitle}>Looking for a job?</div>
                        <label className="checkbox">
                            <Field name="lookingForAJob" component="input" type="checkbox"/>
                            <div className="checkboxCheck"></div>
                        </label>
                    </div>
                    <div className={classes.informationEdit}>
                        <img src={AboutMe} />
                        <div className={classes.imgTitle}>About me</div>
                        <Field placeholder="About me" name="aboutMe" component={Textarea} 
                            validate={[required, maxLength300]}/>
                    </div>
                    <div className={classes.informationEdit}>
                        <img src={Skills} />
                        <div className={classes.imgTitle}>My skills</div>
                        <Field placeholder="My professional skills" name="lookingForAJobDescription" 
                            component={Textarea} validate={[required, maxLength300]}/>
                    </div>
                </div>
                <div className={classes.listContacts}>{Object.keys(profile.contacts).map(key => {
                    return <Contact error={error} key={key} contactTitle={key} contactValue={profile.contacts[key]} editMode={editMode} name={"contacts." + key} />
                })}</div>
                <div>
                    <button>Save</button><button onClick={exitOfEditMode}>Cancel</button>
                </div>
            </form>
        </div>
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
        <ProfileDataReduxForm onSubmit={onSubmit} exitOfEditMode={props.exitOfEditMode} {...props} />
    )
}
export default EditProfileData;