import * as type from "../constants";

// /**
//  *
//  * @param task
//  * @returns {{type: string, task: *}}
//  */
// export const createTask = (task) => {
//     return {
//         type: type.ADD_NEW_TASK,
//         task
//     }
// };


export const createTask = task => (dispatch, getState, {getFirebase, getFirestore}) => {
    dispatch({
        type: type.ADD_NEW_TASK,
        task
    });
};
