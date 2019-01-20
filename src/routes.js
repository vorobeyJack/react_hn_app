import {NotFound} from "./components/404";
import TaskList from "./containers/TaskList";

export const routes = [
    {
        name: 'Home',
        path: '/',
        isExact: true,
        component: NotFound
    },

    {
        name: 'Login',
        path: '/login',
        component: NotFound
    },

    {
        name: 'Register',
        path: '/register',
        component: NotFound
    },

    {
        name: 'Logout',
        path: '/logout',
        component: NotFound
    },

    {
        name: 'Tasks',
        path: '/tasks',
        component: TaskList
    },

    {
        name: 'Users',
        path: '/users',
        component: NotFound
    },

    {
        name: '404',
        component: NotFound
    }
];