import React, { useState } from "react";
import classes from './ProfileInfo.module.css';
import DefaultIcon from './../../../icons/default_icon_user.png';
import ChangePhoto from './../../../icons/changePhoto.png';
import JobSearch from './../../../icons/jobSearch.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    const goToEditMode = () => {
        setEditMode(true);
    }

    const exitOfEditMode = () => {
        setEditMode(false);
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={classes.profileInfo}>
            <div className={classes.descriptionBlock}>
                <div className={classes.photoUserField}>
                    <img src={profile.photos.large !== null ? profile.photos.large : DefaultIcon} className={classes.photoUser} />
                    {isOwner &&
                        <div className={classes.changePhoto}>
                            <label htmlFor="newPhoto">
                                <img src={ChangePhoto} />
                            </label>
                            <input type={"file"} onChange={onMainPhotoSelected} id="newPhoto" />
                        </div>}
                </div>
                <div>
                    <div className={classes.userName}>{profile.fullName}</div>
                    <div className={classes.statusAndIconJobSearch}>
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
                        {profile.lookingForAJob && <div className={classes.iconJobSearchField}>
                            <div className={classes.iconJobSearch} >
                                <div>I'm</div>
                                <img src={JobSearch} />
                            </div>
                            <div className={classes.imgTitle}>User is looking for a job</div>
                        </div>}
                    </div>
                </div>
            </div>
            <div className={classes.aboutUser}>
                {editMode
                    ? <ProfileDataForm profile={profile} exitOfEditMode={exitOfEditMode}
                        saveProfile={saveProfile} editMode={editMode}
                        initialValues={profile} />
                    : <ProfileData profile={profile} isOwner={isOwner}
                        goToEditMode={goToEditMode} editMode={editMode} />}
            </div>
        </div>
    )
}

export default ProfileInfo;