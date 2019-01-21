import * as type from "../constants";

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const tasks = (
    state = [], action) => {
    switch (action.type) {
        case type.TASKS_FETCH_REQUEST:
            return state;
        case type.CREATE_NEW_TASK_REQUEST:
            return state;
        case type.NEW_TASK_CREATED_SUCCESSFULLY:
            const {id, name, description, priority, timeEstimation, createdAt} = action.task;
            return [...state,
                {
                    id,
                    name,
                    description,
                    priority,
                    timeEstimation,
                    createdAt
                }];
        case type.NEW_TASK_CREATED_FAILED:
            console.log(action);
            return state;
        default:
            return state;
    }
};
