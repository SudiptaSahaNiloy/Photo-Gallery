import * as actionTypes from "./actionTypes";

export const addComments = (author, comment, imageId) => {
    // console.log("Hi");
    return {
        type: actionTypes.ADD_COMMENTS,
        payload: {
            author: author,
            comment: comment,
            imageId: imageId,
        }
    }
}