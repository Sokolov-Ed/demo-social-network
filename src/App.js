import './App.css';
import Nav from './components/Nav/Nav';
import { Route, withRouter } from 'react-router';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/AppReducer';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import { HashRouter, Switch } from 'react-router-dom';
import { WithSuspense } from './components/HOC/WithSuspense';
import Preloader from './components/Common/Preloader/Preloader';
import { Redirect } from "react-router";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Switch>
            <Redirect exact from="/" to="/profile" />
            <Route path='/profile/:userID?' render={WithSuspense(ProfileContainer)} />
            <Route path='/dialogs' render={WithSuspense(DialogsContainer)} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appR.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

export const MainApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}