import React from 'react';
import classes from './AddMessage.module.css';
import { reduxForm, Field, reset } from "redux-form";
import { Textarea, InputPhoto } from '../../Common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../Utils/Validators/Validator';

const validate = values => {
    const errors = {};

    if (!values.newMessageBody && !values.messagePhoto)
        errors.newMessageBody = "This field is empty";
    if (values.newMessageBody && values.newMessageBody.length > 300)
        errors.newMessageBody = "Must be 300 characters or less";
    
    return errors;
}

const AddMessage = (props) => {
    let addNewMessage = (formData, dispatch) => {
        let text = formData.newMessageBody;
        let photo = formData.messagePhoto && URL.createObjectURL(formData.messagePhoto);
        document.getElementById("loadingPhoto").style.backgroundColor = "";
        dispatch(reset("dialogAddMessageReduxForm"));
        props.addMyMessage(text, photo);
        props.setUpdateDate(props.currentDialogId);
    }
    return (
        <AddMessageReduxForm onSubmit={addNewMessage}/>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.addMessageField}>
                <Field component={Textarea} name="newMessageBody" placeholder="Input your message" />
                <Field name="messagePhoto" type="file" component={InputPhoto} />
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageReduxForm',
    validate
})(AddMessageForm)

export default AddMessage;