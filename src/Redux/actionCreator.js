import axios from "axios";
import * as actionTypes from "./actionTypes";
import { baseURL } from "./baseURL";

export const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENTS,
    payload: comment
})

export const addComments = (author, comment, imageId) => dispatch => {
    const newComment = {
        author: author,
        comment: comment,
        imageId: imageId,
    }

    newComment.date = new Date().toISOString();

    axios.post(baseURL + 'comments', newComment)
        .then(response => response.data)
        .then(comment => dispatch(commentConcat(comment)));
}


export const loadComments = (comments) => {
    return {
        type: actionTypes.LOAD_COMMENTS,
        payload: comments,
    }
}

export const fetchComments = () => dispatch => {
    axios.get(baseURL + "comments")
        .then(response => response.data)
        .then(comments => dispatch(loadComments(comments)))
}


export const loadImages = (images) => {
    return {
        type: actionTypes.LOAD_IMAGES,
        payload: images,
    }
}

export const filterImages = (category) => {
    return {
        type: actionTypes.FILTER_IMAGES,
        payload: category,
    }
}

export const fetchImages = () => dispatch => {
    axios.get(baseURL + "gallery")
        .then(response => response.data)
        .then(images => dispatch(loadImages(images)))
}
