import React from 'react';
import classes from './Users.module.css';
import DefaultIcon from './../../icons/default_icon_user.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProcess, followOrUnfollow, addDialog, setCurrentDialog }) => {
    return (
        <div>
            <div className={classes.avaAndFollowField}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : DefaultIcon} className={classes.ava} />
                </NavLink >
                <div className={classes.buttonsField}>
                    {user.followed
                        ? <button disabled={followingInProcess.some(id => id === user.id)} onClick={() => {
                            followOrUnfollow(user.id, false)
                        }} className={classes.forButton}>Unfollow</button>
                        : <button disabled={followingInProcess.some(id => id === user.id)} onClick={() => {
                            followOrUnfollow(user.id, true)
                        }} className={classes.forButton}>Follow</button>
                    }
                    <NavLink to={`/dialogs/${user.id}`}>
                        <button className={classes.forButton} onClick={() => {addDialog(user); setCurrentDialog(user.id)}}>Message</button>
                    </NavLink>
                </div>
            </div>
            <NavLink to={'/profile/' + user.id}>
                <div className={classes.item}>
                    <div className={classes.userData}>
                        <div className={classes.userName}>{user.name}</div>
                        {user.status && <div className={classes.userStatus}>{user.status}</div>}
                    </div>
                </div>
            </NavLink >
        </div>
    )
}
export default User;