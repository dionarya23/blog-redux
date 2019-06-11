import {FETCH_POST, NEW_POST} from './type' 

/**
 * dan untuk aksi nya akan dijalankan disini,
 * disini memakai dispatch
 * dispatch() is the method used to dispatch actions 
 * and trigger state changes to the store. 
 * */
export const fetchPosts = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            
           dispatch({
               type    : FETCH_POST,
               payload : posts
           })

        })
}

export const createPost = postData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => {
            dispatch({
                type    : NEW_POST,
                payload : post
            })
        })
}
