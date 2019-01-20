import React from 'react';
import {Nav} from './Nav';
import {Input, Menu} from 'semantic-ui-react';

export const Navbar = () => {
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
                        <Input icon='search' placeholder='Search...'/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
