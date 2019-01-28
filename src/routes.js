import {NotFound} from "./components/404";
import LoginForm from './containers/authentication/LoginForm';
import MainForm from './containers/authentication/MainForm';
import TaskList from "./containers/TasksList";
import UsersList from "./containers/UsersList";

export const routes = [
    {
        name: 'Home',
        path: '/',
        isExact: true,
        component: NotFound,
        isPrivate: true
    },

    {
        name: 'Login',
        path: '/login',
        component: LoginForm
    },

    {
        name: 'registration',
        path: '/register',
        component: MainForm
    },

    {
        name: 'Logout',
        path: '/logout',
        component: NotFound,
        isPrivate: true
    },

    {
        name: 'Tasks',
        path: '/tasks',
        component: TaskList,
        isPrivate: true
    },

    {
        name: 'Users',
        path: '/users',
        component: UsersList,
        isPrivate: true
    },

    {
        name: '404',
        component: NotFound,
    }
];
