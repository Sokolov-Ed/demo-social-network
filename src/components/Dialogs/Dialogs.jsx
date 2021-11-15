import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import AddMessageContainer from './AddMessage/AddMessageContainer';
import ScrollableFeed from 'react-scrollable-feed';
import iconExit from '../../icons/Exit.png';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => (<DialogItem name={d.name} key={d.id} id={d.id} src={d.src} setCurrentDialog={props.setCurrentDialog}/>));
    let currentDialogElement = props.state.currentDialog;
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems + " " + (props.state.currentDialog.id ? classes.openDialogArea : classes.closedDialogArea)}>
                {dialogsElements}
            </div>
            {currentDialogElement.id &&
                <div className={classes.messagesArea}>
                <div className={classes.panelUser}>
                    <div onClick={props.closeCurrentDialog} className={classes.iconExit}>
                        <img src={iconExit} />
                    </div>
                    <img src={currentDialogElement.src} className={classes.PhotoUser}/>
                    <div className={classes.UserName}>
                        {currentDialogElement.name}
                    </div>
                    <div className={classes.options}>
                        <div className={classes.point}/>
                        <div className={classes.point}/>
                        <div className={classes.point}/>
                    </div>
                </div>
                <div className={classes.messages}>
                    <ScrollableFeed forceScroll={true}>
                        <Message messages={props.state.messages} />
                    </ScrollableFeed>
                </div>
                <div className={classes.addMessage}>
                    <AddMessageContainer />
                </div>
            </div>
            }
        </div>
    )
}
export default Dialogs;