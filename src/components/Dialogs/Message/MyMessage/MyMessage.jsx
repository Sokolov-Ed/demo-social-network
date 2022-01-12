import classes from './MyMessage.module.css';
import otherClasses from '../Message.module.css';

const MyMessage = (props) => {
    return (
        <div className={classes.itemMyMessage}>
            <div className={classes.borderMyMessage}>
                <div className={otherClasses.messageText} >
                    {props.photo && <img src={props.photo}/>}
                    <div className={otherClasses.text}>{props.message}</div>
                </div>
            </div>
            <div className={classes.Arrow} />
        </div>
    )
}
export default MyMessage;