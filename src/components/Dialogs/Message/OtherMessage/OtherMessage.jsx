import classes from './OtherMessage.module.css';
import otherClasses from '../Message.module.css';

const OtherMessage = (props) => {
    return (
        <div className={classes.itemOtherMessage}>
            <div className={classes.Arrow} />
            <div className={classes.borderOtherMessage}>
                {props.photo && <div className={otherClasses.img}>
                    <img src={props.photo}/>
                </div> }
                {props.message && <div className={otherClasses.messageText} >
                    {props.message}
                </div>}
            </div>
        </div>
    )
}
export default OtherMessage;