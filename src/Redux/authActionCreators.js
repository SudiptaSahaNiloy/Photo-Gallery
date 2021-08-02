import axios from "axios";
import * as actionTypes from "./actionTypes.js";

export const authSuccess = (idToken, localId) => {
    return({
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            idToken: idToken,
            localId: localId,
        },
    })
}

export const authLogout = () => {
    return({
        type: actionTypes.AUTH_LOGOUT,
        payload: null,
    })
}

export const auth = (firstName, lastName, email, password, mode) => dispatch => {
    const authData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        resturnSecureToken: true,
    }

    const API_KEY = 'AIzaSyDG6ZER5RUdy8cTHgJrSNyk-50y4UXwo1E';
    const URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
    axios.post(URL + mode + '?key=' + API_KEY, authData)
        .then(response => {
            localStorage.setItem('idToken', response.data.idToken);
            localStorage.setItem('localId', response.data.localId);
            const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('expirationTime', expirationTime);
            dispatch(authSuccess(response.data.idToken, response.data.localId))});
}