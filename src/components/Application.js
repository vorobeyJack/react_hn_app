import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import {routes} from '../routes';

class Application extends React.Component {
    render() {
        return (
            <div className='container'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/login'>Login</NavLink>
                            <NavLink to='/logout'>Logout</NavLink>
                            <NavLink to='/register'>Register</NavLink>
                            <NavLink to='/tasks'>Tasks</NavLink>
                            <NavLink to='/users'>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                    <Switch>
                        {routes.map(({name, path, isExact, component}) => {
                            return (
                                <Route
                                    key={name}
                                    path={path}
                                    isExact={isExact}
                                />
                            )
                        })}
                    </Switch>
            </div>
        );
    }
}

export default Application;
