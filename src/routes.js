import {NotFound} from "./components/404";
import MainForm from './containers/Registration/MainForm';
import TaskList from "./containers/TasksList";

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
        name: 'registration',
        path: '/register',
        component: MainForm
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
