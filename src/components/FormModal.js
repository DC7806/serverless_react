import React from 'react';
import Modal from 'react-bootstrap/Modal';
import EditForm from './EditForm';

export default class FormModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm blogid={ this.props.blogid }
                    title={ this.props.title }
                    content={ this.props.content }
                    key={ this.props.blogid }
          />
        </Modal.Body>
      </Modal>
    );
  }
}
 