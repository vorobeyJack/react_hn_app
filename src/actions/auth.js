import md5 from 'crypto-js/md5';
import * as type from '../constants';

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
            type: type.USER_REGISTER_FAILED
        })
    }
};
