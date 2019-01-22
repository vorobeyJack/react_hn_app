import React from 'react';
import {connect} from 'react-redux';
import {Dimmer, Item, Loader} from 'semantic-ui-react';
import AddTask from '../components/AddTask';
import {TaskItem} from '../components/TaskItem';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {getList, deleteTask} from '../actions/tasks';
import {DeleteTaskModal} from '../components/DeleteTaskModal';

class TasksList extends React.Component {
    state = {
        isLoading: true,
        showDeleteModal: false,
        deleteTaskId: null
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

    toggleDeleteModal = (taskId) => {
        this.setState(({showDeleteModal}) => ({
            showDeleteModal: !showDeleteModal,
            deleteTaskId: taskId
        }));
    };

    deleteTask = (taskId) => {
        this.setState({
            showDeleteModal: false
        });
        this.props.deleteTask(taskId);
    };

    render() {
        let {tasks, searchingBy: {searchValue}} = this.props;
        const {isLoading, showDeleteModal, deleteTaskId} = this.state;

        if (isLoading) {
            return (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )
        }

        //if we are searching for certain tasks by name...
        if (undefined !== searchValue) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
            })
        }

        return (
            <Item.Group>
                <AddTask/>
                <DeleteTaskModal
                    show={showDeleteModal}
                    onClose={this.toggleDeleteModal}
                    deleteTask={this.deleteTask}
                    taskId={deleteTaskId}
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
                        key={`${id}+${name}`}
                        showDeleteModal={this.toggleDeleteModal}
                    />
                ))}
            </Item.Group>
        );
    }

}

const mapStateToProps = ({firestore: {ordered: {tasks}}, search}) => {
    return {
        tasks: tasks,
        searchingBy: search
    }
};

export default compose(
    connect(mapStateToProps, {getList, deleteTask}),
    firestoreConnect([
        {
            collection: 'tasks'
        }
    ])
)(TasksList);
