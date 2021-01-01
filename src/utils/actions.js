import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

// Used with Django DRF
const BASE_URL = 'http://127.0.0.1:8000'

export function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `jwt ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function login(data) {
    return dispatch => {
        return axios.post(`${BASE_URL}/api/token/`, data).then(res => {
            const token = res.data.access;
            const refresh = res.data.refresh;
            localStorage.setItem('access', token);
            localStorage.setItem('refresh', refresh);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwtDecode(token)));
        });
    }
}

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}
