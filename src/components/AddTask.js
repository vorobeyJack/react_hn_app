import React from 'react';
import {connect} from 'react-redux';
import {createTask} from '../actions/tasks';

import Modal from "semantic-ui-react/dist/commonjs/modules/Modal/Modal";
import {Button, Form, Input, Select, TextArea} from "semantic-ui-react";

//TODO - fix validation
class AddTask extends React.Component {
    state = {
        id: null,
        name: '',
        priority: '',
        description: '',
        timeEstimation: '',
        showModal: false,
        isValidForm: false
    };

    handleSave = (e) => {
        e.preventDefault();
        if (!this.isFormNotValid()) {
            this.setState(({showModal, isValidForm}) => {
                return {
                    ...this.state,
                    showModal: !showModal,
                    isValidForm: !isValidForm
                }
            });
            this.props.createTask(this.state);
        }
    };

    handleInput = ({target: {id, value}}) => {
        this.setState({
            isValidForm: !this.isFormNotValid(),
            [id]: value
        });
    };

    handleDropdown = ({target: {innerText}}) => {
        this.setState({
            id: Date.now(),
            priority: innerText.toLowerCase()
        });
    };

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };

    isFormNotValid = () => {
        return ('' === this.state.name ||
            '' === this.state.description ||
            '' === this.state.priority ||
            '' === this.state.timeEstimation
        );
    };

    onCloseModal = () => {
        this.setState({
            id: null,
            name: '',
            priority: '',
            description: '',
            timeEstimation: '',
            showModal: false,
            isValidForm: false
        });
    };

    render() {
        const priorities = [
            {key: 'low', text: 'Low', value: 'low'},
            {key: 'normal', text: 'Normal', value: 'normal'},
            {key: 'high', text: 'High', value: 'high'},
            {key: 'critical', text: 'Critical', value: 'critical'},
        ];

        const {showModal, isValidForm} = this.state;

        return (
            <Modal
                trigger={<Button color='teal' onClick={this.toggleModal}>CREATE</Button>}
                onClose={this.onCloseModal}
                open={showModal}
            >
                <Modal.Header>ADD NEW TASK</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    id='name'
                                    control={Input}
                                    label='Name'
                                    placeholder='Name'
                                    onChange={this.handleInput}
                                />
                                <Form.Field
                                    id='priority'
                                    control={Select}
                                    options={priorities}
                                    label={{children: 'Priority', htmlFor: 'form-select-control-priority'}}
                                    placeholder='Priority'
                                    search
                                    searchInput={{id: 'priority'}}
                                    onChange={this.handleDropdown}
                                />
                                <Form.Field
                                    id='timeEstimation'
                                    control={Input}
                                    label='Time estimation'
                                    placeholder='2h'
                                    onChange={this.handleInput}
                                />
                            </Form.Group>
                            <Form.Field
                                id='description'
                                control={TextArea}
                                label='Description'
                                placeholder='Description'
                                onChange={this.handleInput}
                            />
                            <Button
                                color='teal'
                                onClick={this.handleSave}
                                disabled={!isValidForm}>SAVE
                            </Button>
                            <Button
                                color='grey'
                                onClick={this.toggleModal}>CANCEL
                            </Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default connect(null, {createTask})(AddTask);
