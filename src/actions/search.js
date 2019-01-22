export const getSearchItems = target => (dispatch, getState) => {
    dispatch({
        type: "SEARCHING_FOR_TASKS_REQUEST",
        target
    });
    // const state = getState();
    // return state.firestore.ordered.tasks;
};
