import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const Nav = props => (
    <NavLink
        exact
        {...props}
        activeClassName="active"
    />
);
