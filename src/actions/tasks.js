import * as type from "../constants";

/**
 *
 * @returns {function(*, *, {getFirebase: *, getFirestore: *}): Promise<firebase.firestore.QuerySnapshot | never>}
 */
export const getList = () => (dispatch, getState, {getFirebase, getFirestore}) => {
    dispatch({
        type: type.TASKS_FETCH_REQUEST
    });

    const firestore = getFirestore();
    return firestore.collection('tasks')
        .get()
        .then(snapshot => {
            dispatch({
                type: type.TASKS_FETCH_SUCCESS
            });

            return snapshot;
        })
        .catch(err => {
            dispatch({
                type: type.TASKS_FETCH_FAIL,
                err
            });
        })
};

/**
 *
 * @param task
 * @returns {Function}
 */
export const createTask = task => (dispatch, getState, {getFirebase, getFirestore}) => {
    dispatch({
        type: type.CREATE_NEW_TASK_REQUEST,
        task
    });

    const firestore = getFirestore();
    firestore.collection('tasks').add({
        ...task,
        id: Date.now(),
        createdAt: Date.now()
    })
        .then(() => {
            dispatch({
                type: type.NEW_TASK_CREATED_SUCCESSFULLY
            })
        })
        .catch(error => {
            dispatch({
                type: type.NEW_TASK_CREATED_FAILED,
                error
            })
        })
};

/**
 *
 * @param taskId
 * @returns {Function}
 */
export const deleteTask = taskId => (dispatch, getState, {getFirebase, getFirestore}) => {
    dispatch({
        type: type.TASK_REMOVE_REQUEST,
        taskId
    });

    const firestore = getFirestore();
    firestore.collection('tasks').where("id", "==", taskId).get()
        .then(querySnapshot => {
            const batch = firestore.batch();
            querySnapshot.forEach(doc => {
                return batch.delete(doc.ref);
            });

            return batch.commit();
        })
        .then(() => {
            dispatch({
                type: type.TASK_REMOVED_SUCCESSFULLY
            })

        })
        .catch(error => {
            dispatch({
                type: type.TASK_REMOVED_FAILED,
                error
            });
        })
};
