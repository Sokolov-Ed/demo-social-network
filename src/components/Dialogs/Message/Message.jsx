import classes from './Message.module.css';
import MyMessage from './MyMessage/MyMessage';
import OtherMessage from './OtherMessage/OtherMessage';

const Message = (props) => {
    let messagesElements = props.messages.map(m => (m.myMessage ? <MyMessage message={m.message} /> : <OtherMessage message={m.message} />));
    return (
        <div>
            <div className={classes.areaMessages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Message;