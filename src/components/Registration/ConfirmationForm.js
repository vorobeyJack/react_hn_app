import React from 'react';
import {Card, Button, Form} from 'semantic-ui-react';

/**
 *
 * @param firstName
 * @param lastName
 * @param email
 * @param phone
 * @param position
 * @param experience
 * @param handlePreviousStep
 * @returns {*}
 * @constructor
 */
export const ConfirmationForm = (
    {
        values: {
            firstName,
            lastName,
            email,
            phone,
            position,
            experience,
        },
        handlePreviousStep
    }) => {
    const cancelAndGoBack = () => {
        handlePreviousStep();
    };

    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header>{firstName} {lastName}</Card.Header>
                    <Card.Meta>{position}</Card.Meta>
                    <Card.Description>
                        {email}
                    </Card.Description>
                    <Card.Description>
                        {phone}
                    </Card.Description>
                    <Card.Description>
                        {experience}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button onClick={cancelAndGoBack}>PREV</Button>
                        <Button.Or text='or'/>
                        <Button color='green'>CONFIRM</Button>
                    </div>
                </Card.Content>
            </Card>
        </Card.Group>
    )
};
