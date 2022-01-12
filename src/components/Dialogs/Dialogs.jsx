import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import AddMessageContainer from './AddMessage/AddMessageContainer';
import ScrollableFeed from 'react-scrollable-feed';
import iconExit from '../../icons/Exit.png';
import DefaultIcon from '../../icons/default_icon_user.png';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    let dialogsElements = [...props.state.dialogs].reverse().map(d => (<DialogItem name={d.name} key={d.id} id={d.id} photo={d.photo} setCurrentDialog={props.setCurrentDialog} />));
    let currentDialogElement = props.state.currentDialog;

    return (
        <div className={(currentDialogElement.id || props.state.dialogs.length === 0) ? 'dialogsPage' : 'dialogsPageClosed'}>
            {props.state.dialogs.length === 0 ? <div className='pageIsEmpty'>
                    <div>Your dialogs is empty</div>
                </div>
                : <>
                <div className={currentDialogElement.id ? classes.dialogItems : classes.dialogItemsClosed}>
                    <div className={classes.dialogsElementsWrapped} >
                        {dialogsElements}
                    </div>
                </div>
                <div className={currentDialogElement.id ? classes.messagesField : classes.messagesFieldClosed}>
                    <div className={classes.panelUser}>
                        <div onClick={props.closeCurrentDialog} className={classes.iconExit}>
                            <img src={iconExit} />
                        </div>
                        <NavLink to={`/profile/${props.state.currentDialog.id}`}>
                            <div className={classes.userField}>
                                <img src={currentDialogElement.photo ? currentDialogElement.photo : DefaultIcon} className={classes.PhotoUser} />
                                <div className={classes.UserName}>
                                    {currentDialogElement.name}
                                </div>
                            </div>
                        </NavLink>
                        <div className={classes.options}>
                            <div className={classes.point} />
                            <div className={classes.point} />
                            <div className={classes.point} />
                        </div>
                    </div>
                    <div className={classes.messages}>
                        <ScrollableFeed forceScroll={true}
                            scrollToBottom={true}>
                            <Message dialogs={props.state.dialogs}
                                currentDialogId={props.state.currentDialog.id} />
                        </ScrollableFeed>
                    </div>
                    <div className={classes.addMessage}>
                        <AddMessageContainer currentDialogId={props.state.currentDialog.id} />
                    </div>
                </div>
            </>}
        </div>
    )
}
export default Dialogs;