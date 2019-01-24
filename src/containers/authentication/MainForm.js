import React from 'react';
import {UserPersonalDataForm} from '../../components/registration/UserPersonalDataForm';
import {UserProfessionalDataForm} from '../../components/registration/UserProfessionalDataForm';
import {ConfirmationForm} from "../../components/registration/ConfirmationForm";
import {PasswordDataForm} from "../../components/registration/PasswordDataForm";
import {connect} from 'react-redux';
import {signUp} from '../../actions/auth';

class MainForm extends React.Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        position: '',
        experience: '',
        password: '',
        passwordConfirm: ''
    };

    handleNextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    };

    handlePreviousStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    };

    handleInput = ({target: {id, value}}) => {
        this.setState({
            [id]: value
        })
    };

    handleSaveUser = () => {
        this.props.signUp(this.state);
        this.props.history.push('/');
    };

    render() {
        const {step} = this.state;
        switch (step) {
            case 1:
                return (
                    <UserPersonalDataForm
                        handleNextStep={this.handleNextStep}
                        handleInput={this.handleInput}
                        values={this.state}
                    />
                );
            case 2:
                return (
                    <UserProfessionalDataForm
                        handleNextStep={this.handleNextStep}
                        handlePreviousStep={this.handlePreviousStep}
                        handleInput={this.handleInput}
                        values={this.state}
                    />
                );
            case 3:
                return (
                    <PasswordDataForm
                        handleNextStep={this.handleNextStep}
                        handlePreviousStep={this.handlePreviousStep}
                        handleInput={this.handleInput}
                        values={this.state}
                    />
                );
            case 4:
                return (
                    <ConfirmationForm
                        handlePreviousStep={this.handlePreviousStep}
                        values={this.state}
                        handleSaveUser={this.handleSaveUser}
                    />
                );
            default:
                return (
                    <UserPersonalDataForm
                        handleNextStep={this.handleNextStep}
                        handleInput={this.handleInput}
                        values={this.state}
                    />
                );
        }
    }
}

export default connect(null, {signUp})(MainForm);
