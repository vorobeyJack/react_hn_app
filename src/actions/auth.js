import md5 from 'crypto-js/md5';
import * as type from '../constants';
import {persist, extract} from '../services/localStorageService';
import {toast} from "react-toastify";

/**
 *
 * @param user
 * @returns {Function}
 */
export const signUp = user => (dispatch, getState, {getFirebase, getFirestore}) => {
    dispatch({
        type: type.USER_REGISTER_REQUEST,
        user
    });

    try {
        const firestore = getFirestore();

        firestore.collection('users').add({
            ...user,
            password: md5(user.password).toString(),
            passwordConfirm: md5(user.password).toString(),
            id: Date.now(),
            createdAt: Date.now()
        });

        dispatch({
            type: type.USER_REGISTER_SUCCESSFULLY,
            user
        })
    } catch (error) {
        dispatch({
            type: type.USER_REGISTER_FAILED,
            error: error.toString()
        })
    }
};

/**
 *
 * @param email
 * @param password
 * @returns {Function}
 */
export const signIn = (email, password) => (dispatch, getState) => {
    dispatch({
        type: type.USER_LOGIN_REQUEST
    });

    try {
        const users = getState().firestore.ordered.users;
        const hashedPassword = md5(password).toString();

        const searchingUsers = (
            users.filter(user => {
                return email === user.email &&
                    user.password === hashedPassword;
            }));

        //if we have some with these email and password
        if (searchingUsers.length > 0) {
            const user = searchingUsers[0];
            persist(user);
            dispatch({
                type: type.USER_LOGIN_SUCCESSFULLY,
                //get first one
                userAuthenticated: user
            });
        } else {
            dispatch({
                type: type.USER_LOGIN_BAD_CREDENTIALS

            });
            setTimeout(() => {
                toast.error(type.LOGIN_BAD_CREDENTIALS_MESSAGE)
            }, 0);
        }
    } catch (error) {
        dispatch({
            type: type.USER_LOGIN_FAILED,
            error: error.toString()
        });
    }
};

/**
 *
 * @returns {Function}
 */
export const signOut = () => dispatch => {
    dispatch({
        type: type.USER_LOGOUT_REQUEST
    });

    try {
        extract();
        dispatch({
            type: type.USER_LOGOUT_SUCCESSFULLY,
            userAuthenticated: null
        });
    } catch (error) {
        dispatch({
            type: type.USER_LOGOUT_FAILED,
            error: error.toString()
        });
    }
};
