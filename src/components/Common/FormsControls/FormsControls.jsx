import classes from "./FormsControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ input, meta: {touched, error}, children }) => {
    const hasError = touched && error;
    return (
        <div className={classes.Field}>
            <div className={classes.formControl + " " + (hasError && classes.error)}>
                <div>
                    {children}
                </div>
                {hasError && <span>
                    {error}
                </span>}
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