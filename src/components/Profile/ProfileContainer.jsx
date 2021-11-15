import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { user, updateStatus, getStatus, savePhoto } from '../../redux/profileReducer';
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.user(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userID !== prevProps.match.params.userID)
            this.refreshProfile();
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} 
                    status={this.props.status} updateStatus={this.props.updateStatus}
                    isOwner={!this.props.match.params.userID} savePhoto={this.props.savePhoto}/>
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
    connect(mapStateToProps, { user, getStatus, updateStatus, savePhoto }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);