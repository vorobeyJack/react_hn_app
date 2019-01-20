import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {routes} from '../routes';
import {connect} from 'react-redux';

import {Navbar} from './general/Navbar';

const Application = () => {
    return (
        <div className='ui container'>
            <Navbar/>
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

export default connect()(Application);
