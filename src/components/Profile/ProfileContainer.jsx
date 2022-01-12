import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { user, updateStatus, getStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
import Preloader from '../Common/Preloader/Preloader';
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.match.params.userID = userId;
        this.props.user(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userID !== prevProps.match.params.userID) {
            this.refreshProfile();
        }
    }
    render() {
        if (!this.props.profile || (this.props.profile && (+this.props.match.params.userID !== this.props.profile.userId))) {
            return (
                <Preloader />
            )
        }
        else return (
            <div>
                <Profile {...this.props} profile={this.props.profile} 
                    status={this.props.status} updateStatus={this.props.updateStatus}
                    isOwner={+this.props.match.params.userID === this.props.authorizedUserId}
                    savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}
                    posts={this.props.posts}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    posts: state.profilePage.posts,
})

export default compose(
    connect(mapStateToProps, { user, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);