import React from 'react';
import {connect} from 'react-redux';
import {Item} from 'semantic-ui-react';
import AddTask from '../components/AddTask';
import {TaskItem} from '../components/TaskItem';

class TasksList extends React.Component {
    render() {
        const {tasks} = this.props;
        return (
            <Item.Group>
                <AddTask/>
                {tasks.map((
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

const mapStateToProps = ({tasks}) => {
    return {
        tasks
    }
};

export default connect(mapStateToProps)(TasksList);
