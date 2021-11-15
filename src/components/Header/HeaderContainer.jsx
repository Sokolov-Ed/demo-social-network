import React from 'react';
import { connect } from 'react-redux';
import { logout, updateProfilePhoto } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (this.props.profile !== null) {
            if (this.props.profile.photos.small !== prevProps.auth.photoUser)
                this.props.updateProfilePhoto(this.props.profile.photos.small);
        }
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    auth: state.auth,
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { logout, updateProfilePhoto })(HeaderContainer);