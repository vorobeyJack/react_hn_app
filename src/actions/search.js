import * as type from '../constants';

/**
 *
 * @param target
 * @returns {Function}
 */
export const getSearchItems = target => (dispatch, getState) => {
    dispatch({
        type: type.SEARCHING_FOR_TASKS_REQUEST,
        searchingBy: target
    });

    try {
        let tasks = getState().firestore.ordered.tasks;
        tasks = tasks.filter(({name}) => {
            return name.toLowerCase().indexOf(target.toLowerCase()) !== -1;
        });

        dispatch({
            type: type.SEARCHING_FOR_TASKS_COMPLETED_SUCCESSFULLY,
            searchingBy: target,
            searchingTasks: tasks
        })
    } catch (error) {
        dispatch({
            type: type.SEARCHING_FOR_TASKS_COMPLETED_WITH_ERROR,
            error: error.toString()
        })
    }
};
