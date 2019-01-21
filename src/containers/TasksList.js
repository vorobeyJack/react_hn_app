import React from 'react';
import {connect} from 'react-redux';
import {Dimmer, Item, Loader} from 'semantic-ui-react';
import AddTask from '../components/AddTask';
import {TaskItem} from '../components/TaskItem';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {getList} from '../actions/tasks';

class TasksList extends React.Component {
    state = {
        isLoading: true
    };

    componentDidMount() {
        // in case if loading items first time
        // from firebase store into redux
        if (this.props.tasks === undefined) {
            this.props.getList()
                .then(() => {
                    this.setState({
                        isLoading: false
                    })
                });
        } else {
            this.setState({
                isLoading: false
            })
        }
    }

    render() {
        const {tasks} = this.props;
        const {isLoading} = this.state;

        if (isLoading) {
            return (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )
        }

        return (
            <Item.Group>
                <AddTask/>
                {tasks && tasks.map((
                    {
                        id,
                        name,
                        description,
                        priority,
                        timeEstimation,
                        users
                    }) => (
                    <TaskItem
                        id={id}
                        name={name}
                        description={description}
                        priority={priority}
                        timeEstimation={timeEstimation}
                        users={users}
                        key={id}
                    />
                ))}
            </Item.Group>
        );
    }

}

const mapStateToProps = ({firestore: {ordered: {tasks}}}) => {
    return {
        tasks: tasks
    }
};

export default compose(
    connect(mapStateToProps, {getList}),
    firestoreConnect([
        {
            collection: 'tasks'
        }
    ])
)(TasksList);
