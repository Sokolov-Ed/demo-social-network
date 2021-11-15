import profileReducer, {addPost, deletePost} from "./profileReducer";
import { render, screen } from '@testing-library/react';

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 11 },
        { id: 2, message: `It's hard`, likesCount: 17 }
    ]
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPost("ITKamasutra");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be ITKamasutra', () => {
    // 1. test data
    let action = addPost("ITKamasutra");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[2].message).toBe("ITKamasutra");
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

test(`after deleting length shouldn't be decrement is id is incorrect`, () => {
    // 1. test data
    let action = deletePost(10);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});