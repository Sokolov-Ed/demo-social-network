import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';
import DefaultIcon from '../../../icons/default_icon_user.png';

const DialogItem = (props) => {
    let getCurrentDialog = () => {
        props.setCurrentDialog(props.id)
    }
    return (
        <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.activeLink}>
            <div className={classes.dialog} onClick={getCurrentDialog}>
                <img src={props.photo ? props.photo : DefaultIcon} className={classes.avaDialogs} />
                <div className={classes.UserName}>
                    {props.name}
                </div>
            </div>
        </NavLink>
    )
}
export default DialogItem;