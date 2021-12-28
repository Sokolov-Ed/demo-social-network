import classes from './Post.module.css';
import photoDefault from '../../../../icons/default_icon_user.png'; 
const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.authorField}>
                <div className={classes.photoUser}>
                    <img src={photoDefault} />
                </div>
                <div className={classes.postAuthor}>
                    Me
                </div>
            </div>
            <div className={classes.postMessage}>
                {props.message}
            </div>
            <div className={classes.postLike}>
                <span>{props.quantityLikes} like</span>
            </div>
        </div>
    )
}
export default Post;