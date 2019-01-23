import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {Experience as ExperienceInput} from '../../components/general/FormInput/Experience';

/**
 *
 * @param position
 * @param experience
 * @param handleInput
 * @param handlePreviousStep
 * @param handleNextStep
 * @returns {*}
 * @constructor
 */
export const UserProfessionalDataForm = (
    {
        values:
            {position, experience},
        handleInput,
        handlePreviousStep,
        handleNextStep
    }) => {
    const saveAndGoAhead = (e) => {
        e.preventDefault();
        handleNextStep();
    };

    const cancelAndGoBack = (e) => {
        e.preventDefault();
        handlePreviousStep();
    };

    const formIsNotValid = () => {
        return position !== '' &&
            experience !== '';
    };

    return (
        <div className="ui grid">
            <div className="ui form nine wide column centered">
                <Form>
                    <h1 className="ui centered">Enter Professional Data</h1>
                    <Form.Field>
                        <label>Position</label>
                        <input
                            id='position'
                            placeholder='Position'
                            onChange={handleInput}
                            defaultValue={position}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Experience</label>
                        <ExperienceInput
                            id='experience'
                            placeholder='Experience (years)'
                            onChange={handleInput}
                            defaultValue={experience}
                        />
                    </Form.Field>
                    <Button.Group>
                        <Button onClick={cancelAndGoBack}>PREV</Button>
                        <Button.Or text='or'/>
                        <Button onClick={saveAndGoAhead} color='green' disabled={!formIsNotValid()}>NEXT</Button>
                    </Button.Group>
                </Form>
            </div>
        </div>
    )
};
