import * as type from '../constants';

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case type.SEARCHING_FOR_TASKS_REQUEST:
            return {
                ...state,
                target: action.target
            };
        case type.SEARCHING_FOR_TASKS_COMPLETED_SUCCESSFULLY:
            return {
                ...state,
                searchingTasks: action.searchingTasks
            };
        case type.SEARCHING_FOR_TASKS_COMPLETED_WITH_ERROR:
            return {
                ...state,
                searchingTasks: [],
                error: action.error
            };
        default:
            return state;
    }
};
