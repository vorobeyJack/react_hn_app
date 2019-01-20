import React from 'react';
import {connect} from 'react-redux';
import {Item} from 'semantic-ui-react';
import {TaskItem} from '../components/TaskItem';
import {getList} from '../actions/tasks';

class TasksList extends React.Component {

    render() {
        const {items} = this.props;

        return (
            <Item.Group>
                {items.map((
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

const mapStateToProps = ({tasks: {items, isFetching, error}}) => {
    return {
        items,
        isFetching,
        error
    }
};

export default connect(mapStateToProps, {getList})(TasksList);
