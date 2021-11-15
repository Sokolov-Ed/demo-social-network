import classes from './OtherMessage.module.css';
const OtherMessage = (props) => {
    return (
        <div className={classes.itemOtherMessage}>
            <div className={classes.Arrow} />
            <div className={classes.borderOtherMessage}>
                {props.message}
            </div>
        </div>
    )
}
export default OtherMessage;