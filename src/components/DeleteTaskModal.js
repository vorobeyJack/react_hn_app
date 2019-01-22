import React from 'react'
import {Button, Modal} from 'semantic-ui-react'

/**
 *
 * @param show
 * @param onClose
 * @param deleteTask
 * @param data
 * @returns {*}
 * @constructor
 */
export const DeleteTaskModal = ({show, onClose, deleteTask, taskId}) => {
    if (show) {
        return (
            <div>
                <Modal size='mini' open={true}>
                    <Modal.Header>Task # {taskId}</Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want to delete this task?</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button.Group>
                            <Button positive onClick={() => deleteTask(taskId)}>YES</Button>
                            <Button.Or/>
                            <Button onClick={onClose}>NO</Button>
                        </Button.Group>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
    return null;
};

