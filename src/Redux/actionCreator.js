import axios from "axios";
import * as actionTypes from "./actionTypes";
import { baseURL } from "./baseURL";

export const addComments = (author, comment, imageId) => {
    return {
        type: actionTypes.ADD_COMMENTS,
        payload: {
            author: author,
            comment: comment,
            imageId: imageId,
        }
    }
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
