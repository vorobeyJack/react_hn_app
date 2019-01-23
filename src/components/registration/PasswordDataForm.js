import React from 'react';
import {Form, Button} from 'semantic-ui-react';

/**
 *
 * @param password
 * @param passwordConfirm
 * @param handlePreviousStep
 * @param handleNextStep
 * @param handleInput
 * @returns {*}
 * @constructor
 */
export const PasswordDataForm = (
    {
        values: {password, passwordConfirm},
        handlePreviousStep,
        handleNextStep,
        handleInput
    }) => {

    const saveAndGoAhead = (e) => {
        e.preventDefault();
        handleNextStep();
    };

    const cancelAndGoBack = (e) => {
        e.preventDefault();
        handlePreviousStep();
    };

    const formIsValid = () => {
        return password !== '' &&
            password.length >= 6 &&
            passwordConfirm !== '' &&
            passwordConfirm === password;
    };

    return (
        <div className="ui grid">
            <div className="ui form nine wide column centered">
                <Form>
                    <h1 className="ui centered">Enter Your Password Data</h1>
                    <h5 className="ui centered">(6 characters min)</h5>
                    <Form.Field>
                        <label>Password</label>
                        <input
                            id='password'
                            type='password'
                            placeholder='Password'
                            onChange={handleInput}
                            defaultValue={password}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password Confirm</label>
                        <input
                            id='passwordConfirm'
                            type='password'
                            placeholder='Password confirm'
                            onChange={handleInput}
                            defaultValue={passwordConfirm}
                        />
                    </Form.Field>
                    <Button.Group>
                        <Button onClick={cancelAndGoBack}>PREV</Button>
                        <Button.Or text='or'/>
                        <Button onClick={saveAndGoAhead} color='green' disabled={!formIsValid()}>NEXT</Button>
                    </Button.Group>
                </Form>
            </div>
        </div>
    )
};
