import React from 'react';
import {Item, Label, Icon} from 'semantic-ui-react';

/**
 *
 * @param id
 * @param name
 * @param description
 * @param priority
 * @param timeEstimation
 * @param users
 * @returns {*}
 * @constructor
 */
export const TaskItem = ({id, name, description, priority, timeEstimation, showDeleteModal}) => {
    return (
        <Item key={id}>
            <Item.Content key={id}>
                <Item.Header>{name}</Item.Header> |
                <Item.Header>Priority: {priority}</Item.Header>
                <Item.Meta>{description}</Item.Meta>
                <Item.Extra>Time: {timeEstimation}</Item.Extra>
                <Item.Extra>
                    <Label>
                        <a onClick={() => showDeleteModal(id)}>
                            <Icon name='trash'/>
                        </a>
                    </Label>
                </Item.Extra>
            </Item.Content>
        </Item>
    );
};
