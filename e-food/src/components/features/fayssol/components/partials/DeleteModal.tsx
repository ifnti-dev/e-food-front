import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { deletePublicite } from '../../dao/api/apiPublicite';

const DeleteModal = (pub_id:{pub_id:number}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleDelete = async(id:{id:number}) => {
  //   await deletePublicite(id);
  // }

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
          <Button variant="danger" onClick={()=>{}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteModal;
