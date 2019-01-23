import * as type from '../constants';

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const authReducer = (state = [], action) => {
    switch (action.type) {
        case type.USER_REGISTER_REQUEST:
            return state;
        case type.USER_REGISTER_SUCCESSFULLY:
            return [
                ...state,
                action.user
            ];
        case type.USER_REGISTER_FAILED:
            return [
                ...state,
                action.error
            ];
        default:
            return state;
    }
};
