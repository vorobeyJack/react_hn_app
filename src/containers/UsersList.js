import React from 'react';
import {Dimmer, Loader, Table} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import _ from 'lodash';
import {getList} from '../actions/users';

class UsersList extends React.Component {
    state = {
        isLoading: true,
        column: null,
        users: [],
        direction: null,
    };

    componentDidMount() {
        // in case if loading items first time
        // from firebase store into redux
        if (this.props.users === undefined) {
            this.props.getList()
                .then(() => {
                    this.setState({
                        isLoading: false,
                        users: this.props.users
                    })
                });
            // or redux already knows about firestore data
        } else {
            this.setState({
                isLoading: false,
                users: this.props.users
            })
        }
    }

    handleSort = clickedColumn => () => {
        const {column, users, direction} = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                users: _.sortBy(users, [clickedColumn]),
                direction: 'ascending',
            });

            return
        }

        this.setState({
            users: users.reverse(),
            direction: direction === 'ascending'
                ? 'descending'
                : 'ascending',
        })
    };

    render() {
        const {isLoading, column, users, direction} = this.state;

        if (isLoading) {
            return (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )
        }

        return (
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'firstName' ? direction : null}
                            onClick={this.handleSort('firstName')}
                        >First Name
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'lastName' ? direction : null}
                            onClick={this.handleSort('lastName')}
                        >Last Name
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'email' ? direction : null}
                            onClick={this.handleSort('email')}
                        >Email
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'position' ? direction : null}
                            onClick={this.handleSort('position')}
                        >Position
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'experience' ? direction : null}
                            onClick={this.handleSort('experience')}
                        >Experience
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {users && users.map(
                        ({
                             firstName,
                             lastName,
                             email,
                             position,
                             experience
                         }) =>
                            (
                                <Table.Row key={email + lastName}>
                                    <Table.Cell>{firstName}</Table.Cell>
                                    <Table.Cell>{lastName}</Table.Cell>
                                    <Table.Cell>{email}</Table.Cell>
                                    <Table.Cell>{position}</Table.Cell>
                                    <Table.Cell>{experience}</Table.Cell>
                                </Table.Row>
                            ))}
                </Table.Body>
            </Table>
        )
    };
}

const mapStateToProps = ({firestore: {ordered: {users}}}) => ({
    users
});

export default compose(
    connect(mapStateToProps, {getList}),
    firestoreConnect([
        {
            collection: 'users'
        }
    ])
)(UsersList);
