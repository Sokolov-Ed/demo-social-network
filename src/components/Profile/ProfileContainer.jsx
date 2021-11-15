import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { user, updateStatus, getStatus } from '../../redux/profileReducer';
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.user(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} 
                    status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { user, getStatus, updateStatus }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);