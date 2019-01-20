import React from 'react';


import Modal from "semantic-ui-react/dist/commonjs/modules/Modal/Modal";
import {Button, Form, Input, Select, TextArea} from "semantic-ui-react";

export default class AddTask extends React.Component {
    state = {
        id: null,
        name: '',
        priority: '',
        description: '',
        timeEstimation: '',
        showModal: false

    };

    handleSave = (e) => {
        e.preventDefault();
        this.setState(({showModal}) => {
            return {
                ...this.state,
                showModal: !showModal
            }
        });
        console.log(this.state);
    };

    handleInput = ({target: {id, value}}) => {
        this.setState({
            id: Date.now(),
            [id]: value
        });
    };

    handleDropdown = ({target: {innerText}}) => {
        this.setState({
            id: Date.now(),
            priority: innerText.toLowerCase()
        });
    };

    openModal = () => {
        this.setState({
            showModal: true
        })
    };

    render() {
        const priorities = [
            {key: 'low', text: 'Low', value: 'low'},
            {key: 'normal', text: 'Normal', value: 'normal'},
            {key: 'high', text: 'High', value: 'high'},
            {key: 'critical', text: 'Critical', value: 'critical'},
        ];

        const {showModal} = this.state;

        return (
            <Modal
                trigger={<Button color='teal' onClick={this.openModal}>CREATE</Button>}
                onClose={this.handleSave}
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
                                    data-id='dsdsd'
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
                            <Button color='teal' onClick={this.handleSave}>SAVE</Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}
