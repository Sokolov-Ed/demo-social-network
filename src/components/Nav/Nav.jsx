import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <NavLink to='/profile' activeClassName={classes.activeLink}>
                <div className={classes.item}>
                    Profile
                </div>
            </NavLink>
            <NavLink to='/dialogs' activeClassName={classes.activeLink}>
                <div className={classes.item}>
                    Messages
                </div>
            </NavLink>
            <NavLink to='/users' activeClassName={classes.activeLink}>
                <div className={classes.item}>
                    Users
                </div>
            </NavLink>
            <NavLink to='/news' activeClassName={classes.activeLink}>
                <div className={classes.item}>
                    News
                </div>
            </NavLink>
            <NavLink to='/music' activeClassName={classes.activeLink}>
                <div className={classes.item}>
                    Music
                </div>
            </NavLink>
            <NavLink to='/settings' activeClassName={classes.activeLink}>
                <div className={classes.item}>
                    Settings
                </div>
            </NavLink>
        </nav>
    )
}

export default Nav;