import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const DeleteModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FaTrash className="icon-red" onClick={handleShow}/>
      {/* <FaEdit className="icon-blue"  /> */}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Contenu du modal de suppression.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteModal;
