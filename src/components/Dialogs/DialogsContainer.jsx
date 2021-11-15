import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';
import { compose } from 'redux';
import { closeCurrentDialog, setCurrentDialog } from '../../redux/dialogsReducer';

let mapStateToProps = (state) => {
    return {
        state: state.messagesPage
    }
}

export default compose(
    connect(mapStateToProps, {setCurrentDialog, closeCurrentDialog}),
    WithAuthRedirect
)(Dialogs)