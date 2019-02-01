import React from 'react';
import {Form} from "semantic-ui-react";
import {Button} from "semantic-ui-react";
import {connect} from 'react-redux';
import {signIn} from '../../actions/auth';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as type from "../../constants";

class LoginForm extends React.Component {
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

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        const {signIn, history: {push}} = this.props;
        signIn(email, password);
        push('/');
    };

    render() {
        const {email, password} = this.state;

        return (
            <div className="ui grid">
                <div className="ui form nine wide column centered">
                    <Form onSubmit={this.handleSubmit}>
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

export default compose(
    connect(null, {signIn}),
    firestoreConnect([
        {
            collection: 'users'
        }
    ])
)(LoginForm);


