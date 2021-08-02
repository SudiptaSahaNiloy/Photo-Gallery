import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    images: [],
    comments: [],
    category: null,
    idToken: null,
    localId: null,
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
        case actionTypes.FILTER_IMAGES:
            return {
                ...state,
                category: action.payload,
            }

        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                idToken: action.payload.idToken,
                localId: action.payload.localId,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                idToken: action.payload,
            }
        default:
            return state;
    }
}