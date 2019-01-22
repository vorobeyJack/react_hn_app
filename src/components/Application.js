import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {routes} from '../routes';

import {Navbar} from './general/Navbar';
import {connect} from 'react-redux';
import {getSearchItems} from '../actions/search';

class Application extends React.Component {
    state = {
        searchValue: null,
        items: []
    };

    handleSearch = (searchValue) => {
        this.setState({
            searchValue
        });

        this.props.getSearchItems(searchValue);
    };

    render() {
        return (
            <div className='ui container'>
                <Navbar handleSearch={this.handleSearch}/>
                <Switch>
                    {routes.map(({name, path, isExact, component}) => {
                        return (
                            <Route
                                key={name}
                                path={path}
                                exact={isExact}
                                component={component}
                            />
                        )
                    })}
                </Switch>
            </div>
        );
    }
};

const mapStateToProps = ({firestore}) => ({
    tasks: firestore.ordered.tasks
});

export default connect(mapStateToProps, {getSearchItems})(Application);
