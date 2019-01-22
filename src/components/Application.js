import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {routes} from '../routes';

import Navbar from './general/Navbar';

export const Application = () => {
    return (
        <div className='ui container'>
            <Navbar/>
            <Switch>
                {routes.map(({name, path, isExact, component}) => {
                    return (
                        <Route
                            key={name}
                            path={path}
                            exact={isExact}
                            component={component}
                        />
                    )
                })}
            </Switch>
        </div>
    );
};
