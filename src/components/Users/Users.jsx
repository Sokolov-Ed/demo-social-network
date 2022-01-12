import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import Preloader from '../Common/Preloader/Preloader';
import User from './User';
import classes from './Users.module.css';

let Users = (props) => {

    return (
        <div className="mainContent">
            {props.isFetching ? <Preloader /> 
                :<div className={classes.usersField}>
                    {props.users.map(u => <User key={u.id} user={u}
                    followingInProcess={props.followingInProcess}
                    followOrUnfollow={props.followOrUnfollow} 
                    addDialog={props.addDialog}
                    setCurrentDialog={props.setCurrentDialog}/>)}
                </div>
            }
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                onPageGhanged={props.onPageGhanged} currentPage={props.currentPage} />
        </div>
    );
}
export default Users;