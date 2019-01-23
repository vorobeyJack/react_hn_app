import React from 'react';
import {Form, Button} from 'semantic-ui-react';

/**
 *
 * @param firstName
 * @param lastName
 * @param email
 * @param phoneNumber
 * @param handleInput
 * @param handleNextStep
 * @returns {*}
 * @constructor
 */
export const UserPersonalDataForm = (
    {
        values:
            {
                firstName, lastName, email, phoneNumber
            },
        handleInput,
        handleNextStep
    }) => {
    const saveAndGoAhead = (e) => {
        e.preventDefault();
        handleNextStep();
    };

    const formIsNotValid = () => {
        return firstName !== '' &&
            lastName !== '' &&
            email !== '' &&
            phoneNumber !== '';
    };

    return (
        <Form>
            <h1 className="ui centered">Enter Personal Details</h1>
            <Form.Field>
                <label>First Name</label>
                <input
                    id='firstName'
                    placeholder='First Name'
                    onChange={handleInput}
                    defaultValue={firstName}
                />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input
                    id='lastName'
                    placeholder='Last Name'
                    onChange={handleInput}
                    defaultValue={lastName}
                />
            </Form.Field>
            <Form.Field>
                <label>Email</label>
                <input
                    type='email'
                    id='email'
                    placeholder='Email Address'
                    onChange={handleInput}
                    defaultValue={email}
                />
            </Form.Field>
            <Form.Field>
                <label>Phone number</label>
                <input
                    id='phoneNumber'
                    placeholder='Phone number'
                    onChange={handleInput}
                    defaultValue={phoneNumber}
                />
            </Form.Field>
            <Button
                onClick={saveAndGoAhead}
                color='green'
                disabled={!formIsNotValid()}
            >NEXT
            </Button>
        </Form>
    );
};
