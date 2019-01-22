import React from 'react';
import {Nav} from './Nav';
import {Input, Menu} from 'semantic-ui-react';

/**
 *
 * @returns {*}
 * @constructor
 */
export const Navbar = ({handleSearch}) => {
    return (
        <div>
            <Menu>
                <Menu.Item as={Nav} name='home' to='/'/>
                <Menu.Item as={Nav} name='tasks' to='/tasks'/>
                <Menu.Item as={Nav} name='users' to='/users'/>
                <Menu.Item as={Nav} name='login' to='/login'/>
                <Menu.Item as={Nav} name='logout' to='/logout'/>
                <Menu.Item as={Nav} name='register' to='/register'/>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...'
                               onChange={({target: {value}}) => handleSearch(value)}/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
