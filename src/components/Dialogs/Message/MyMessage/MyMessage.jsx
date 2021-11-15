import classes from './MyMessage.module.css';
const MyMessage = (props) => {
    return (
        <div className={classes.itemMyMessage}>
            <div className={classes.borderMyMessage}>
                {props.message}
            </div>
            <div className={classes.Arrow} />
        </div>
    )
}
export default MyMessage;