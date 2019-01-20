import {TASKS_FETCH_SUCCESS} from "../constants";

/**
 *
 * @returns {{type: *}}
 */
export const getList = () => {
    return {
        type: TASKS_FETCH_SUCCESS
    }
};
