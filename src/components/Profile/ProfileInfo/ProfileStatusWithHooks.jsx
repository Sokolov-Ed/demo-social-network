import React, { useEffect, useState } from "react";
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    let [isLongStatus, setLongStatus] = useState(false);
    let [isError, setError] = useState();

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status);
        let widthTextCurrent = document.getElementById("fieldStatus") && document.getElementById("fieldStatus").offsetWidth;
        if (widthTextCurrent > 295)
            setLongStatus(true);
        else
            setLongStatus(false);
    }, [props.status]);

    const activatedEditMode = () => {
        setEditMode(true);
    }

    const deactivatedEditMode = () => {
        if(status.length < 101) {
            setError();
            setEditMode(false);
            props.updateStatus(status);
        }
        else {
            setError("Must be 100 characters or less");
        }
    }

    return (
        <div className={classes.statusForm}>
            <span className={classes.title}>Status</span>
            {!editMode
                ? <div>
                    <div className={classes.fieldStatus} onDoubleClick={props.isOwner ? activatedEditMode : undefined}>
                        <div className={classes.statusWrapped}>
                            <span id="fieldStatus" className={isLongStatus ? classes.textStatus: undefined} >
                                {props.status}
                            </span>
                        </div>
                        {props.isOwner && <div className={classes.clue}>
                            Double click on the field to change the status
                        </div>}
                    </div>
                </div>
                : <div className={classes.inputStatus}>
                    <div className={isError ? classes.error : undefined}>
                        <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivatedEditMode}/>
                    </div>
                    {isError && <span>{isError}</span>}
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;