import IMAGES from "../Data/images";
import COMMENTS from "../Data/comments";
import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    images: IMAGES,
    comments: COMMENTS,
}

export const reducer = (state = INITIAL_STATE, action) => {
    if(action.type === actionTypes.ADD_COMMENTS){
        let comment = action.payload;
        
    }
    return state;
}

