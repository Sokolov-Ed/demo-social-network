import React, {useEffect, useState} from "react";
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);
    const activatedEditMode = () => {
        setEditMode(true);
    }
    const deactivatedEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    return (
        <div className={classes.statusForm}>
            Status
            {!editMode
                ? <div>
                    <div className={classes.fieldStatus} onDoubleClick={activatedEditMode} >
                        {props.status}
                    </div>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivatedEditMode} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;