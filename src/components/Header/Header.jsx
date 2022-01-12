import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import DefaultIcon from './../../icons/default_icon_user.png';
import vertLine from './../../icons/vertLine.png';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.titlePage}>Social network</div>
            <div className={classes.loginBlock}>
                {props.isAuth ?
                    <div className={classes.area}>
                        <NavLink to='/profile/'>
                            <div className={classes.userBlock}>
                                <img src={props.auth.photoUser !== null ? props.auth.photoUser : DefaultIcon} className={classes.userPhoto} />
                                <div className={classes.userName}>{props.auth.login}</div>
                            </div>
                        </NavLink>
                        <div className={classes.vertLIne}>
                            <img src={vertLine} />
                        </div>
                        <div className={classes.logoutBlock} onClick={props.logout}>
                            Log Out
                        </div>
                    </div>
                    : <div className={classes.titlePage}>WELCOME</div>
                }
            </div>
        </header>
    )
}

export default Header;