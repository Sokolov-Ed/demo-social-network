import React from 'react';
import { connect } from 'react-redux';
import { addMyMessage, setUpdateDate } from '../../../redux/dialogsReducer';
import AddMessage from './AddMessage';

let mapStateToProps = (state, props) => {
    return {
        currentDialogId: props.currentDialogId
    }
}

const AddMessageContainer = connect(mapStateToProps, {addMyMessage, setUpdateDate})(AddMessage);

export default AddMessageContainer;