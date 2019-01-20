/**
 * @type {*[]}
 */
const tasksList = [
    {
        id: 1,
        name: "Task name #1",
        priority: "high",
        timeEstimation: '',
        users: []
    },

    {
        id: 2,
        name: "Task name #2",
        priority: "high",
        timeEstimation: '',
        users: []
    },

    {
        id: 3,
        name: "Task name #3",
        priority: "high",
        timeEstimation: '',
        users: []
    }
];

/**
 *
 * @param initialState
 * @param action
 * @returns {*[]}
 */
export const tasks = (initialState = tasksList, action) => {
    switch (action.type) {
        default:
            return initialState;
    }
}
