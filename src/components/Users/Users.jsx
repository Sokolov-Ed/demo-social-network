import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import Preloader from '../Common/Preloader/Preloader';
import User from './User';

let Users = (props) => {
    return (
        <div className="mainContent">
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                onPageGhanged={props.onPageGhanged} currentPortion={props.currentPortion}
                setCurrentPortion={props.setCurrentPortion} currentPage={props.currentPage} />
            {props.isFetching ? <Preloader />
                : props.users.map(u => <User key={u.id} user={u}
                    followingInProcess={props.followingInProcess}
                    followOrUnfollow={props.followOrUnfollow} />)
            }
        </div>
    );
}
export default Users;