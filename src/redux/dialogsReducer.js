const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG';
const CLOSE_CURRENT_DIALOG = 'CLOSE_CURRENT_DIALOG'

let initialState = {
    dialogs: [
        { id: 1, name: 'Dima', src: 'https://sribu-sg.s3.amazonaws.com/assets/media/avatar/sukmaumbaran/AVA.png' },
        { id: 2, name: 'Vlad', src: 'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg' },
        { id: 3, name: 'Igor', src: 'https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg' },
        { id: 4, name: 'Andrey', src: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' },
        { id: 5, name: 'Vanya', src: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' },
        { id: 6, name: 'Vadik', src: 'https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg' },
        { id: 7, name: 'Dimasik', src: 'https://sribu-sg.s3.amazonaws.com/assets/media/avatar/sukmaumbaran/AVA.png' },
        { id: 8, name: 'Vladick', src: 'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg' },
        { id: 9, name: 'Vadim', src: 'https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg' },
        { id: 10, name: 'Andromeda', src: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' },
        { id: 11, name: 'Vanish', src: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' },
        { id: 12, name: 'WTFfgsdsdgsdfgfsdgsdgfsdgs', src: 'https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg' },
    ],
    messages: [
        { id: 1, myMessage: false, message: 'Hi' },
        { id: 2, myMessage: false, message: 'How are you?' },
        { id: 1, myMessage: true, message: 'Hi' },
        { id: 2, myMessage: true, message: 'I feel bad' },
        { id: 2, myMessage: false, message: 'Why?' },
    ],
    currentDialog: {}
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.text;
            let newMessage = {
                id: 3,
                myMessage: true,
                message: text
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        case SET_CURRENT_DIALOG:
            let setCurrentDialog = {
                id: state.dialogs[action.idDialog].id,
                name: state.dialogs[action.idDialog].name,
                src: state.dialogs[action.idDialog].src
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
        default:
            return state;
    }
}

export const addMyMessage = (text) => ({
    type: ADD_MESSAGE,
    text
})
export const setCurrentDialog = (idDialog) => ({
    type: SET_CURRENT_DIALOG,
    idDialog
})
export const closeCurrentDialog = () => ({
    type: CLOSE_CURRENT_DIALOG
})

export default dialogsReducer;