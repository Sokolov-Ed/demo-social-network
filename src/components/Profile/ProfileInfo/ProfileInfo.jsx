import React, { useState } from "react";
import classes from './ProfileInfo.module.css';
import DefaultIcon from './../../../icons/default_icon_user.png';
import Preloader from '../../Common/Preloader/Preloader';
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
    if (!profile) {
        return (
            <Preloader />
        )
    }
    else {
        return (
            <div className={classes.profileInfo}>
                <div className={classes.descriptionBlock}>
                    <img src={profile.photos.large != null ? profile.photos.large : DefaultIcon} className={classes.photoUser} />
                    <div>
                        <div className={classes.userName}>{profile.fullName}</div>
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                    </div>
                </div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
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
}

export default ProfileInfo;