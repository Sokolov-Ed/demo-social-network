import React from 'react';
import { connect } from 'react-redux';
import { addMyMessage } from '../../../redux/dialogsReducer';
import AddMessage from './AddMessage';

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.messages.newMessageText
    }
}

const AddMessageContainer = connect(mapStateToProps, {addMyMessage})(AddMessage);

export default AddMessageContainer;