import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';

const EditionModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FaEdit className="icon-blue" onClick={handleShow} />
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edition Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Contenu du modal d'édition.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditionModal;
