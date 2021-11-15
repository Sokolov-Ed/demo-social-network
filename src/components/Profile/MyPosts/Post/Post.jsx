import classes from './Post.module.css';
const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://static.thenounproject.com/png/801390-200.png' />
            {props.message}
            <div>
                <span>{props.quantityLikes} like</span>
            </div>
        </div>
    )
}
export default Post;