import React, { useReducer } from "react";

let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).user
    : "";
let token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token")).auth_token
    : "";

export const initialState = {
    userDetails: "" || user,
    token: "" || token,
    loading: false,
    errorMessage: null
};
export const initialQueryState = {
    data: null,
    loading: false,
    errorMessage: null
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true
            };
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                user: action.payload.user,
                token: action.payload.auth_token,
                loading: false
            };
        case "LOGOUT":
            return {
                ...initialState,
                user: "",
                token: ""
            };
        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            };

        default:
            //throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export const QueryReducer = (initialQueryState, action) => {
    switch (action.type) {
        case "REQUEST_QUERY":
            return {
                ...initialQueryState,
                loading: true
            };
        case "QUERY_SUCCESS":
            return {
                ...initialQueryState,
                data: action.payload,
                loading: false
            };
        case "QUERY_ERROR":
            return {
                ...initialQueryState,
                loading: false,
                errorMessage: action.error
            };
        default:
            //throw new Error(`Unhandled action type: ${action.type}`);
    }
};
