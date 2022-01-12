import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProcess, getIsFetching, getPageSize, getStateUsers, getTotalUsersCount } from '../../redux/usersCelectors';
import { followOrUnfollow, getUsers } from '../../redux/usersReducer';
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';
import Users from './Users';
import { withRouter } from 'react-router';
import { addDialog, setCurrentDialog } from '../../redux/dialogsReducer';

class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize, totalUsersCount } = this.props;
        this.props.getUsers(currentPage, pageSize);
        let pagesCount = Math.ceil(totalUsersCount / pageSize);
        if(this.props.match.params.currentPage < 1 || this.props.match.params.currentPage > pagesCount)
            this.props.history.push('/users/page=1');
        else 
        this.props.history.push(`/users/page=${currentPage}`);
    }
    componentDidUpdate(prevProps, prevState) {
        const { pageSize, totalUsersCount } = this.props;
        let pagesCount = Math.ceil(totalUsersCount / pageSize);
        if((+this.props.match.params.currentPage < 1 || +this.props.match.params.currentPage > pagesCount) && this.props.match.params.currentPage !== prevProps.match.params.currentPage)
            this.props.history.push('/users/page=1');
        else if(this.props.match.params.currentPage !== prevProps.match.params.currentPage)
            this.onPageGhanged(this.props.match.params.currentPage);
    }

    onPageGhanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.getUsers(pageNumber, +pageSize);
        this.props.history.push(`/users/page=${pageNumber}`);
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
                addDialog={this.props.addDialog}
                setCurrentDialog={this.props.setCurrentDialog}
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
    }
}

export default compose(
    connect(mapStateToProps, {
        getUsers, followOrUnfollow, addDialog, setCurrentDialog
    }),
    withRouter,
    WithAuthRedirect
)(UsersContainer)