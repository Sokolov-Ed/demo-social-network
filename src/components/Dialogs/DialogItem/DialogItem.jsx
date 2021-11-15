import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';
const DialogItem = (props) => {
    let getCurrentDialog = () => {
        props.setCurrentDialog(props.id - 1)
    }
    return (
        <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.activeLink}>
            <div className={classes.dialog} onClick={getCurrentDialog}>
                <img src={props.src} className={classes.avaDialogs} />
                <div className={classes.UserName}>
                    {props.name}
                </div>
            </div>
        </NavLink>
    )
}
export default DialogItem;