import IMAGES from "../Data/images";
import COMMENTS from "../Data/comments";
import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    images: IMAGES,
    comments: COMMENTS,
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
        default:
            return state;
    }
}