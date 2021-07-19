import {clientId, clientSecret, username, password} from '../config'
const ROOT_URL = 'https://williamsarland-dev-ed.my.salesforce.com';

function promiseTime() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({user:"dimsy", auth_token:'XXXXXXX'});
        }, 2000);
    });
}

export async function loginUser(dispatch) {
    dispatch({ type: 'REQUEST_LOGIN' });
    const result = await promiseTime();
    dispatch({ type: 'LOGIN_SUCCESS', payload: result });
    return result;

    /*const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin':'*',
            'Access-Control-Allow-Origin':'*',
            'Accept-Encoding':'gzip, deflate, br',
            'Connection':'keep-alive',
            'Content-Security-Policy': 'self',
            'Strict-Transport-Security': 'max-age=31536000',
            'Access-Control-Expose-Headers': 'Content-Security-Policy'
        },
        body: JSON.stringify({}),
    };

    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        let response = await fetch(`https://login.salesforce.com/services/oauth2/token?grant_type=password&client_id=${clientId}&client_secret=${clientSecret}&username=${username}&password=${password}`, requestOptions);
        let data = await response.json();

        if (data) {
            console.log(data)
            dispatch({ type: 'LOGIN_SUCCESS', payload: {user:"dimsy", auth_token:'XXXXX'} });
            localStorage.setItem('currentUser', JSON.stringify(data));
            localStorage.setItem('token', JSON.stringify(data));
            return data;
        }

        dispatch({ type: 'LOGIN_SUCCESS', payload: {user:"dimsy", auth_token:'00D2o000000apsf!AR0AQAJCU5LohnVu69oRTD9ho.6hHaFgNJfY4Aj0w9BO7_TeLs7TQ7MD_fp9DVYj13_gqrc5mldS6GU0Illt_WltGHTRcc2G'} });
        //dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        return;
    } catch (error) {
        //dispatch({ type: 'LOGIN_ERROR', error: error });
        dispatch({ type: 'LOGIN_SUCCESS', payload: {user:"dimsy", auth_token:'00D2o000000apsf!AR0AQAJCU5LohnVu69oRTD9ho.6hHaFgNJfY4Aj0w9BO7_TeLs7TQ7MD_fp9DVYj13_gqrc5mldS6GU0Illt_WltGHTRcc2G'} });
    }*/
}

export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}

export async function query(dispatch, q){
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Origin':'*',
            'Access-Control-Allow-Origin':'*',
            'Accept':'*/*',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    };
    dispatch({ type: 'REQUEST_QUERY' });
    try {
        let response = await fetch(ROOT_URL+q, requestOptions);
        let data = await response.json();

        if (data) {
            console.log(data)
            dispatch({ type: 'REQUEST_SUCCESS', payload: data });
            return data;
        }

        dispatch({ type: 'REQUEST_ERROR', error: data.errors[0] });
        return;
    } catch (error) {
        //dispatch({ type: 'LOGIN_ERROR', error: error });
        dispatch({ type: 'REQUEST_ERROR', error: error });
    }
}
