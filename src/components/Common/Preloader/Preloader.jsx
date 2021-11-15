import classes from './Preloader.module.css';
import preloader from './../../../icons/preloader.svg';

const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;