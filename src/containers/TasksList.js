import React from 'react';
import {connect} from 'react-redux';
import {Dimmer, Item, Loader} from 'semantic-ui-react';
import AddTask from '../components/AddTask';
import {TaskItem} from '../components/TaskItem';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {getList} from '../actions/tasks';
import {DeleteTaskModal} from '../components/DeleteTaskModal';

class TasksList extends React.Component {
    state = {
        isLoading: true,
        showDeleteModal: false
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

    toggleDeleteModal = () => {
        this.setState(({showDeleteModal}) => ({
            showDeleteModal: !showDeleteModal
        }))
    };

    render() {
        const {tasks} = this.props;
        const {isLoading, showDeleteModal} = this.state;

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
                <DeleteTaskModal
                    show={showDeleteModal}
                    onClose={this.toggleDeleteModal}
                />

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
                        showDeleteModal={this.toggleDeleteModal}
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
