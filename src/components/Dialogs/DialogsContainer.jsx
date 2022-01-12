import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';
import { compose } from 'redux';
import { closeCurrentDialog, setCurrentDialog } from '../../redux/dialogsReducer';
import { withRouter } from 'react-router';

class DialogsContainer extends React.Component {
    componentDidMount() {
        if(this.props.state.currentDialog.id)
            this.props.history.push(`/dialogs/${this.props.state.currentDialog.id}`);
        else if(!this.props.state.currentDialog.id || (this.props.match.params.dialogId !== this.props.state.currentDialog.id))
            this.props.history.push(`/dialogs`);
    }

    componentDidUpdate(prevProps) {
        if((!this.props.state.currentDialog.id && (this.props.state.currentDialog.id !== prevProps.state.currentDialog.id)) || (!this.props.state.currentDialog.id && this.props.match.params.dialogId))
            this.props.history.push(`/dialogs`);
        else if((this.props.state.currentDialog.id && this.props.match.params.dialogId) && (this.props.match.params.dialogId !== prevProps.match.params.dialogId) && (this.props.state.currentDialog.id === prevProps.state.currentDialog.id))
            this.props.closeCurrentDialog();
    }

    render() {
        return (
            <Dialogs state={this.props.state} setCurrentDialog={this.props.setCurrentDialog}
                closeCurrentDialog={this.props.closeCurrentDialog}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.messagesPage
    }
}

export default compose(
    connect(mapStateToProps, {setCurrentDialog, closeCurrentDialog}),
    WithAuthRedirect,
    withRouter
)(DialogsContainer)