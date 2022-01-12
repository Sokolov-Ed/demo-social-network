import classes from './Post.module.css';
import photoDefault from '../../../../icons/default_icon_user.png';
import notLiked from '../../../../icons/notLiked.png';
import liked from '../../../../icons/liked.png';
import deleteIcon from '../../../../icons/deleteIcon.png';

const Post = (props) => {
    const setLike = (idPost) => {
        props.addLike(idPost);
    }

    const setDeleted = (idPost) => {
        props.deletePost(idPost);
    }

    return (
        <div className={classes.item}>
            <div className={classes.authorField}>
                <div className={classes.photoUser}>
                    <img src={props.userPhoto ? props.userPhoto : photoDefault} />
                </div>
                <div className={classes.postAuthor}>
                    {props.userLogin}
                </div>
                <div onClick={() => setDeleted(props.postId)} className={classes.deleteIcon}>
                    <img src={deleteIcon} />
                </div>
            </div>
            {props.message && <div className={classes.postMessage}>
                {props.message}
            </div>}
            {props.photoURL && <div className={classes.postPhoto}>
                <img src={props.photoURL} />
            </div>}
            <div className={classes.postLike}>
                <div >
                    <img src={!props.isMyLike ? notLiked : liked} onClick={() => setLike(props.postId)}/>
                </div>
                <div className={classes.likesCount}>{props.quantityLikes}</div>
            </div>
        </div>
    )
}

export default Post;