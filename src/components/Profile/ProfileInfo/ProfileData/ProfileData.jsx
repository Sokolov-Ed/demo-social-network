import React from "react";
import classes from "./ProfileData.module.css";
import Contact from "./Contact";
import AboutMe from "../../../../icons/aboutMe.png";
import Skills from "../../../../icons/skills.png";

const ProfileData = ({ profile, isOwner, goToEditMode, editMode }) => {
    return (
        <div>
            <div className={classes.profileDataField}>
                <div className={classes.informationUserShort}>
                    {profile.aboutMe && <div className={classes.informationShort}>
                        <img src={AboutMe}/>
                        <div className={classes.imgTitle}>About user</div>
                        <div className={classes.descriptionInformation}>{profile.aboutMe}</div>
                    </div>}
                    {profile.lookingForAJobDescription && <div className={classes.informationShort}>
                        <img src={Skills} />
                        <div className={classes.imgTitle}>Skills user</div>
                        <div className={classes.descriptionInformation}>{profile.lookingForAJobDescription}</div>
                    </div>}
                </div>
                <div>
                    <div className={classes.listContacts}>{Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} editMode={editMode} />
                    })}</div>
                </div>
                <div>
                    {isOwner && <button onClick={goToEditMode}>Edit</button>}
                </div>
            </div>
        </div>
    )
}

export default ProfileData;