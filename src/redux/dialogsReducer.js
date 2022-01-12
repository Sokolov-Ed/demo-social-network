const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG';
const CLOSE_CURRENT_DIALOG = 'CLOSE_CURRENT_DIALOG';
const ADD_DIALOG = 'ADD_DIALOG';
const SET_UPDATE_DATE = 'SET_UPDATE_DATE';

let initialState = {
    dialogs: [
    ],
    currentDialog: {}
}

let messageId = 0;
let updateCount = 0;

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: ++messageId,
                myMessage: true,
                message: action.text,
                photo: action.photo
            };
            let dialogsCopy = {
                ...state,
                dialogs: state.dialogs.map(d => {
                    if(d.id === state.currentDialog.id)
                        return Object.assign({}, d, {messages: [...d.messages, newMessage]})
                    return d
                })
            }
            return dialogsCopy;
        case SET_CURRENT_DIALOG:
            let dialog = state.dialogs.filter(i => i.id === action.idDialog);
            let setCurrentDialog = {
                id: dialog[0].id,
                name: dialog[0].name,
                photo: dialog[0].photo,
                messages: dialog[0].messages
            }
            return {
                ...state,
                currentDialog: setCurrentDialog
            }
        case CLOSE_CURRENT_DIALOG:
            return {
                ...state,
                currentDialog: {}
            }
        case ADD_DIALOG:
            let dialogUser = {
                name: action.user.name,
                id: action.user.id,
                photo: action.user.photos.small,
                messages: [],
                updateData: ++updateCount
            };
            let count = 0;
            let researchDoubleDialogs = {
                ...state,
                dialogs: state.dialogs.map(d => {
                    if(d.id !== dialogUser.id)
                        return count++
                })
            }
            if(state.dialogs.length === 0 || count === state.dialogs.length) 
                return {
                ...state,
                dialogs: [...state.dialogs, dialogUser]
            }
        case SET_UPDATE_DATE:
            let updatingDate = {
                ...state,
                dialogs: state.dialogs.map(d => {
                    if(d.id === action.dialogId)
                        return Object.assign({}, d, {updateData: ++updateCount})
                    return d
                })
            }
            let newUpdate = updatingDate.dialogs.sort((a, b) => {return a.updateData - b.updateData});
            return {
                ...state,
                dialogs: newUpdate
            }
        default:
            return state;
    }
}

export const addMyMessage = (text = "", photo = "") => ({
    type: ADD_MESSAGE,
    text,
    photo
})
export const setCurrentDialog = (idDialog) => ({
    type: SET_CURRENT_DIALOG,
    idDialog
})
export const closeCurrentDialog = () => ({
    type: CLOSE_CURRENT_DIALOG
})
export const addDialog = (user) => ({
    type: ADD_DIALOG,
    user
})
export const setUpdateDate = (dialogId) => ({
    type: SET_UPDATE_DATE,
    dialogId
})

export default dialogsReducer;