import { Field } from "redux-form";

const Contact = ({ contactTitle, contactValue, editMode, name }) => {
    return (
        <div>
            {editMode 
                ? <div>{contactTitle}: <Field placeholder={contactTitle} name={name} component={"input"}/></div>
                : contactValue && <div>{contactTitle}: {contactValue}</div>}
        </div>
    )
}

export default Contact;