import * as type from "../constants";

/**
 *
 * @returns {function(*, *, {getFirebase: *, getFirestore: *}): Promise<firebase.firestore.QuerySnapshot | never>}
 */
export const getList = () => (dispatch, getState, {getFirebase, getFirestore}) => {
    dispatch({
        type: type.USERS_FETCH_REQUEST
    });

    const firestore = getFirestore();
    return firestore.collection('users')
        .get()
        .then(snapshot => {
            dispatch({
                type: type.USERS_FETCH_SUCCESS
            });

            return snapshot;
        })
        .catch(err => {
            dispatch({
                type: type.USERS_FETCH_FAIL,
                err
            });
        })
};
