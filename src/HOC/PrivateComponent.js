import React from 'react';
import {Redirect} from 'react-router-dom';
import {isUserAuthenticated} from '../services/localStorageService';

/**
 *
 * @param WrappedComponent
 * @returns {Function}
 * @constructor
 */
export const PrivateComponent = (WrappedComponent) => {
    console.log(isUserAuthenticated());
    return () => {
        if (isUserAuthenticated()) {
            return <WrappedComponent {...this.props}/>
        }
        return <Redirect to='/login'/>
    }
};
