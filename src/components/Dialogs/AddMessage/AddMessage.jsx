import React from 'react';
import classes from './AddMessage.module.css';
import { reduxForm, Field, reset } from "redux-form";
import { Textarea } from '../../Common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../Utils/Validators/Validator';

const AddMessage = (props) => {
    let addNewMessage = (formData, dispatch) => {
        let text = formData.newMessageBody;
        dispatch(reset("dialogAddMessageReduxForm"));
        props.addMyMessage(text);
    }
    return (
            <AddMessageReduxForm onSubmit={addNewMessage}/>
    )
}

const maxLength150 = maxLengthCreator(150);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.areaAddMessage}>
                <Field component={Textarea} name="newMessageBody"
                    placeholder="Enter your message" validate={[required, maxLength150]}/>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageReduxForm'
})(AddMessageForm)

export default AddMessage;