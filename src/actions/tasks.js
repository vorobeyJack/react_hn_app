import * as type from "../constants";

/**
 *
 * @returns {{type: *}}
 */
export const getList = () => {
    return {
        type: type.TASKS_FETCH_SUCCESS
    }
};

/**
 *
 * @param task
 * @returns {{type: string, task: *}}
 */
export const createTask = (task) => {
    return {
        type: type.ADD_NEW_TASK,
        task
    }
};
