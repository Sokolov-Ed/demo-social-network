import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getCurrentPage, getCurrentPortion, getFollowingInProcess, getIsFetching, getPageSize, getStateUsers, getTotalUsersCount } from '../../redux/usercCelectors';
import { followOrUnfollow, getUsers, setCurrentPortion } from '../../redux/usersReducer';
import Preloader from '../Common/Preloader/Preloader';
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }
    onPageGhanged = (pageNumber) => {
        const pageSize = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }
    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                onPageGhanged={this.onPageGhanged}
                currentPage={this.props.currentPage}
                followingInProcess={this.props.followingInProcess}
                followOrUnfollow={this.props.followOrUnfollow}
                isFetching={this.props.isFetching}
                currentPortion={this.props.currentPortion}
                setCurrentPortion={this.props.setCurrentPortion}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: getStateUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProcess: getFollowingInProcess(state),
        currentPortion: getCurrentPortion(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        getUsers, followOrUnfollow, setCurrentPortion
    }),
    WithAuthRedirect
)(UsersContainer)