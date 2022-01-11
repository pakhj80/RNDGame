import { handleActions } from 'redux-actions';

import axios from 'axios';

function getPostAPI(postId) {
    if(postId){
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    } else {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
    }
}

const GET_POST = 'post/GET_POST';
const GET_POST_PENDING = 'post/GET_POST_PENDING';
const GET_POST_FULFILLED = 'post/GET_POST_FULFILLED';
const GET_POST_REJECTED = 'post/GET_POST_REJECTED';

export const getPost = (postId) => ({
    type: GET_POST,
    payload: getPostAPI(postId)
})
const initialState = {
    pending: false,
    error: false,
    data: {
        title: '',
        body: ''
    }
}

export default handleActions({
    [GET_POST_PENDING]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        };
    },
    [GET_POST_FULFILLED]: (state, action) => {
        const { title, body } = action.payload.data;
        return {
            ...state,
            pending: false,
            data: {
                title, body
            }
        };
    },
    [GET_POST_REJECTED]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState);