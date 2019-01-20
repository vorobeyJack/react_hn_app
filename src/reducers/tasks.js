import {TASKS_FETCH_SUCCESS} from "../constants";
import {TASKS_FETCH_REQUEST} from "../constants";
import {TASKS_FETCH_FAIL} from "../constants";

/**
 *
 * @type {{isFetching: boolean, error: boolean, items: *[]}}
 */
const initialState = {
    isFetching: false,
    error: false,
    items: [
        {
            id: 1,
            name: "Task name #1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
                "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
                "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore " +
                "eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia " +
                "deserunt mollit anim id est laborum.",
            priority: "high",
            timeEstimation: '14h',
            users: []
        },

        {
            id: 2,
            name: "Task name #2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
                "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
                "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore " +
                "eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia " +
                "deserunt mollit anim id est laborum.",
            priority: "high",
            timeEstimation: '2h',
            users: []
        },

        {
            id: 3,
            name: "Task name #3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
                "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
                "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore " +
                "eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia " +
                "deserunt mollit anim id est laborum.",
            priority: "high",
            timeEstimation: '12h',
            users: []
        }
    ]
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case TASKS_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case TASKS_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false
            };
        case TASKS_FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        default:
            return initialState;
    }
};
