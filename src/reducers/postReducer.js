import {FETCH_POST, NEW_POST} from '../actions/type'

/**
 * ini initialState yang sebagai pengganti state
 * yang nanti nya bisa digunakan di COMPONENT tertentu
 * misal POST Component bisa menggunakan items
 * dimana items mengandung banyak sekali posts 
 * */
const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POST :
        return {
            ...state,
            items: action.payload
        }

        case NEW_POST :
                return {
                    ...state,
                    item: action.payload
                }

        default: 
        return state;
    }
}