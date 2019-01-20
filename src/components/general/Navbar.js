import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu, Input} from 'semantic-ui-react';

/**
 *
 * @param routes
 * @returns {*}
 * @constructor
 */
export const NavBar = ({routes}) => (
    <Menu>
        <Menu.Menu position='left'>
            {routes.map(route =>
                <Menu.Item key={route.path}>
                    <NavLink
                        key={route.path}
                        exact={route.isExact}
                        to={route.path}
                    >
                        {route.name}
                    </NavLink>
                </Menu.Item>
            )}
        </Menu.Menu>
        <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search...'/>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);
