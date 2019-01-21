import React from 'react'
import {Button, Modal} from 'semantic-ui-react'

/**
 *
 * @param show
 * @param onClose
 * @returns {*}
 * @constructor
 */
export const DeleteTaskModal = ({show, onClose}) => {
    if (show) {
        return (
            <div>
                <Modal size='mini' open={true}>
                    <Modal.Header>Delete Your Account</Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want to delete your account</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={onClose}>No</Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Yes'/>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
    return null;
};

