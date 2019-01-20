import React from 'react';
import {Item} from 'semantic-ui-react';

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
export const TaskItem = ({id, name, description, priority, timeEstimation, users}) => (
    <Item>
        <Item.Content>
            <Item.Header>{name}</Item.Header> |
            <Item.Header>Priority: {priority}</Item.Header>
            <Item.Meta>{description}</Item.Meta>
            <Item.Description>
                {/*<Image src='/images/wireframe/short-paragraph.png'/>*/}
            </Item.Description>
            <Item.Extra>Time: {timeEstimation}</Item.Extra>
        </Item.Content>
    </Item>
);
