import React from 'react';
import {Nav} from './Nav';
import {Input, Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {getSearchItems} from '../../actions/search';
import {signOut} from '../../actions/auth';
import {withRouter} from 'react-router-dom';

/**
 * @returns {*}
 * @constructor
 */
const Navbar = (props) => {
    const handleSearch = ({target: {value}}) => {
        props.getSearchItems(value);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        const {signOut, history: {push}} = props;
        signOut();
        push('/login')
    };

    const {isAuthenticated} = props;
    if (isAuthenticated) {
        return (
            <div>
                <Menu>
                    <Menu.Item as={Nav} name='home' to='/'/>
                    <Menu.Item as={Nav} name='tasks' to='/tasks'/>
                    <Menu.Item as={Nav} name='users' to='/users'/>
                    <Menu.Item as={Nav} name='logout' to='/logout' onClick={handleLogout}/>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...'
                                   onChange={handleSearch}/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }

    return (
        <div>
            <Menu>
                <Menu.Item as={Nav} name='login' to='/login'/>
                <Menu.Item as={Nav} name='register' to='/register'/>
            </Menu>
        </div>
    )
};

export default withRouter(connect(null, {getSearchItems, signOut})(Navbar));
