import React from 'react';
import {UserPersonalDataForm} from '../../components/registration/UserPersonalDataForm';
import {UserProfessionalDataForm} from '../../components/registration/UserProfessionalDataForm';
import {ConfirmationForm} from "../../components/registration/ConfirmationForm";

export default class MainForm extends React.Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        position: '',
        experience: ''
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

    isFormValid = (step) => {
        switch (step) {
            case 1:
                return this.state.firstName !== '' &&
                    this.state.lastName !== '' &&
                    this.state.email !== '' &&
                    this.state.phone !== '';
            case 2:
                return this.state.position !== '' &&
                    this.state.experience !== '';
            default:
                return false;
        }
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
                        isFormValid={this.isFormValid}
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
                    <ConfirmationForm
                        handlePreviousStep={this.handlePreviousStep}
                        values={this.state}
                    />
                );
            default:
                return (
                    <UserPersonalDataForm
                        handleNextStep={this.handleNextStep}
                        handleInput={this.handleInput}
                        values={this.state}
                        isFormValid={this.isFormValid}
                    />
                );
        }
    }
}
