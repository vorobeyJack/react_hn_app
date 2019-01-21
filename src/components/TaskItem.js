import React from 'react';
import {Item, Label} from 'semantic-ui-react';

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
export const TaskItem = ({id, name, description, priority, timeEstimation, showDeleteModal}) => (
    <Item key={id}>
        <Item.Content key={id}>
            <Item.Header>{name}</Item.Header> |
            <Item.Header>Priority: {priority}</Item.Header>
            <Item.Meta>{description}</Item.Meta>
            <Item.Extra>
                <Label>
                    <a href='#' onClick={showDeleteModal}>REMOVE</a>
                </Label>
                <Label icon='globe' content='Additional Languages'/>
            </Item.Extra>
            <Item.Extra>Time: {timeEstimation}</Item.Extra>
        </Item.Content>
    </Item>
);
