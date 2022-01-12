import classes from './Message.module.css';
import MyMessage from './MyMessage/MyMessage';
import OtherMessage from './OtherMessage/OtherMessage';

const Message = (props) => {
    let messagesElements = props.dialogs.filter(i => i.id === props.currentDialogId)[0];
    messagesElements = messagesElements && messagesElements.messages.map(m => (m.myMessage ? <MyMessage message={m.message} photo={m.photo}/> : <OtherMessage message={m.message} photo={m.photo}/>));
    return (
        <div>
            <div className={classes.areaMessages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Message;