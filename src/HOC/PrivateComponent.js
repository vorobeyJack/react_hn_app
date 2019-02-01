import React from 'react';
import {Redirect} from 'react-router-dom';
import {isUserAuthenticated} from '../services/localStorageService';

/**
 * @param WrappedComponent
 * @returns {Function}
 * @constructor
 */
export const PrivateComponent = (WrappedComponent) => {
    return (props) => {
        if (isUserAuthenticated()) {
            return <WrappedComponent {...props}/>
        }
        return <Redirect to='/login'/>
    }
};
