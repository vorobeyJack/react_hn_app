export const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case "SEARCHING_FOR_TASKS_REQUEST":
            return {
                ...state,
                searchValue: action.target
            };
        default:
            return state;
    }
};
