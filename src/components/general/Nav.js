import React from 'react';
import {NavLink} from 'react-router-dom';

export const Nav = props => (
    <NavLink
        exact
        {...props}
        activeClassName="active"
    />
);
