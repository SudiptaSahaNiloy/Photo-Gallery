import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    images: [],
    comments: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENTS:
            let comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toDateString();
            return {
                ...state,
                comments: state.comments.concat(comment),
            }
        case actionTypes.LOAD_IMAGES:
            return {
                ...state,
                images: action.payload,
            }
        case actionTypes.LOAD_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            }
        default:
            return state;
    }
}