import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {routes} from '../routes';
import {connect} from 'react-redux';

import {NavBar} from './general/Navbar';

const Application = () => {
    return (
        <div className='ui container'>
            <NavBar routes={routes}/>
            <Switch>
                {routes.map(({name, path, isExact, component}) => {
                    return (
                        <Route
                            key={name}
                            exact={isExact}
                            path={path}
                            component={component}
                        />
                    )
                })}
            </Switch>
        </div>
    );
};

export default connect()(Application);
