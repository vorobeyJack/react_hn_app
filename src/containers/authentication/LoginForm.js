import React from 'react';
import {Form} from "semantic-ui-react";
import {Button} from "semantic-ui-react";

export class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleInput = ({target: {id, value}}) => {
        this.setState({
            [id]: value
        })
    };

    isValidForm = () => {
        return this.state.email !== '' &&
            this.state.password !== ''
    };

    render() {
        const {email, password} = this.state;
        return (
            <div className="ui grid">
                <div className="ui form nine wide column centered">
                    <Form>
                        <h1 className="ui centered">Login</h1>
                        <Form.Field>
                            <label>Email</label>
                            <input
                                id='email'
                                placeholder='Email'
                                onChange={this.handleInput}
                                defaultValue={email}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input
                                id='password'
                                placeholder='Password'
                                onChange={this.handleInput}
                                defaultValue={password}
                            />
                        </Form.Field>
                        <Button
                            color='green'
                            disabled={!this.isValidForm()}
                        >LOGIN
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}
