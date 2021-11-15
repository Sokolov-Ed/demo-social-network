import React from 'react';
import classes from './Users.module.css';
import DefaultIcon from './../../icons/default_icon_user.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProcess, followOrUnfollow }) => {
    return (
        <div className={classes.item}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : DefaultIcon} className={classes.ava} />
                </NavLink>
            </div>
            <div className={classes.forDataAndButton}>
                <div className={classes.forData}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={classes.areaForButton}>
                    {user.followed
                        ? <button disabled={followingInProcess.some(id => id === user.id)} onClick={() => {
                            followOrUnfollow(user.id, false)
                        }} className={classes.forButton}>Unfollow</button>
                        : <button disabled={followingInProcess.some(id => id === user.id)} onClick={() => {
                            followOrUnfollow(user.id, true)
                        }} className={classes.forButton}>Follow</button>
                    }
                </div>
            </div>
        </div>
    )
}
export default User;