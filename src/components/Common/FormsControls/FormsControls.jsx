import classes from "./FormsControls.module.css";
import iconAddPhoto from "../../../icons/addPhoto.png";

const FormControl = ({ input, meta: {touched, error}, children }) => {
    const hasError = touched && error;
    return (
        <div className={classes.Field}>
            <div className={classes.formControl + " " + (hasError && classes.error)}>
                {hasError && <span>
                    {error}
                </span>}
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...Restprops } = props;
    return <FormControl {...props}><textarea {...input} {...Restprops} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...Restprops } = props;
    return <FormControl {...props}><input {...input} {...Restprops} /></FormControl>
}

export const InputPhoto = (props) => {
    const { input } = props;

    const handleChange = (e, input) => {
        e.preventDefault();
        if (e.target.files.length) {
            const photo = e.target.files[0];
            const localImageUrl = URL.createObjectURL(photo);
            const imgObj = new window.Image();

            imgObj.onload = () => {
                input.onChange(photo);
                URL.revokeObjectURL(photo);
                document.getElementById("loadingPhoto").style.backgroundColor = "#c4f974";
            }
            document.getElementById("inputPhoto").value = "";
            imgObj.src = localImageUrl;
        }
    }

    return (
        <div className={classes.inputPhoto}>
            <label htmlFor="inputPhoto">
                <img src={iconAddPhoto} id="loadingPhoto"/>
            </label>
            <input name={input.name}
                type="file"
                onChange={e => handleChange(e, input)}
                id="inputPhoto"
                accept=".jpg, .jpeg, .png"
                />
        </div>
    )
}