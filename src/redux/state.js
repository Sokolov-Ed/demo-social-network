import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 11 },
                { id: 2, message: `It's hard`, likesCount: 17 }
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Dima', src: 'https://sribu-sg.s3.amazonaws.com/assets/media/avatar/sukmaumbaran/AVA.png' },
                { id: 2, name: 'Vlad', src: 'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg' },
                { id: 3, name: 'Igor', src: 'https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg' },
                { id: 4, name: 'Andrey', src: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' },
                { id: 5, name: 'Vanya', src: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' },
                { id: 6, name: 'Vadik', src: 'https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg' },
            ],
            messages: {
                myMessage: [
                    { id: 1, message: 'Hi', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gJ3z0avzNGkcjGitKnu-07YhUh1Hcd29OQ&usqp=CAU' },
                    { id: 2, message: 'I feel bad', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gJ3z0avzNGkcjGitKnu-07YhUh1Hcd29OQ&usqp=CAU' }
                ],
                otherMessage: [
                    { id: 1, message: 'Hi', src: 'https://sribu-sg.s3.amazonaws.com/assets/media/avatar/sukmaumbaran/AVA.png' },
                    { id: 2, message: 'How are you?', src: 'https://sribu-sg.s3.amazonaws.com/assets/media/avatar/sukmaumbaran/AVA.png' }
                ],
                newMessageText: ''
            }
        },
        navBarPage: {
            friends: [
                { id: 1, name: 'Dima', src: 'https://sribu-sg.s3.amazonaws.com/assets/media/avatar/sukmaumbaran/AVA.png' },
                { id: 2, name: 'Vlad', src: 'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg' },
                { id: 3, name: 'Igor', src: 'https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg' },
            ]
        }
    },
    _callSubscriber(_state) {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispath(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.messagesPage, action);
        navBarReducer(this._state.navBarPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;