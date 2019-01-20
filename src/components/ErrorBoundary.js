import React from 'react';
import {Container, Header, Icon} from 'semantic-ui-react';
import {UNDEFINED_ERROR_MESSAGE} from '../constants';

/**
 * Error boundary wrapper component
 */
export default class extends React.Component {
    state = {
        hasError: false
    };

    componentDidCatch(err, info) {
        this.setState({hasError: true});
        console.error(info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container text>
                    <Header as='h2'>
                        {UNDEFINED_ERROR_MESSAGE}
                        <Icon loading size='small' name='sun'/>
                    </Header>
                </Container>
            );
        }

        return this.props.children;
    }
}
