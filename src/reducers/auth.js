import * as type from '../constants';

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        //login cases
        case type.USER_LOGIN_REQUEST:
            return state;
        case type.USER_LOGIN_SUCCESSFULLY:
            return {
                ...state,
                userAuthenticated: action.userAuthenticated
            };
        case type.USER_LOGIN_BAD_CREDENTIALS:
            return {
                ...state,
                userAuthenticated: null
            };
        case type.USER_LOGIN_FAILED:
            return state;
        //register cases
        case type.USER_REGISTER_REQUEST:
            return state;
        case type.USER_REGISTER_SUCCESSFULLY:
            return {
                ...state,
                userRegistered: action.user
            };
        case type.USER_REGISTER_FAILED:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
