import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {routes} from '../routes';
import {PrivateComponent} from "../HOC/PrivateComponent";
import {isUserAuthenticated} from '../services/localStorageService';

import Navbar from './general/Navbar';

export const Application = () => {
    const isAuth = isUserAuthenticated();
    return (
        <div className='ui container'>
            <Navbar isAuthenticated={isAuth}/>
            <Switch>
                {routes.map(({name, path, isExact, component, isPrivate}) => {
                    const resultComponent = isPrivate ? PrivateComponent(component) : component;
                    return (
                        <Route
                            key={name}
                            path={path}
                            exact={isExact}
                            component={resultComponent}
                        />
                    )
                })}
            </Switch>
        </div>
    );
};
