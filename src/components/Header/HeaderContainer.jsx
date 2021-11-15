import React from 'react';
import { connect } from 'react-redux';
import { logout, newProfilePhoto } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    auth: state.auth,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { logout, newProfilePhoto })(HeaderContainer);