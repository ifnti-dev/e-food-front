import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { deletePublicite } from '../../dao/api/apiPublicite';
import { usePubliciteService } from '../../dao/services/publiciteService';
interface DeleteModalProps {
  pub_id: number;
}

const DeleteModal: React.FC<DeleteModalProps> = ({pub_id}) => {
  const [show, setShow] = useState(false);
  const { fetchData,publicites } = usePubliciteService();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleDelete = async(id:{id:number}) => {
  //   await deletePublicite(id);
  // }
//   useEffect(() => {
//     fetchData(1); // Appel initial à fetchData avec restaurantId = 1
// }, []);

  const handleDelete = async () => {
//alert("bon debarras")
    try {
      //alert("bon debarras")
      const data = await deletePublicite(pub_id);
      console.log("deleting...........publicites");
      console.log(publicites);
      
      
      // Ici, vous pouvez effectuer des actions supplémentaires après la suppression si nécessaire
      fetchData(1)
      console.log("Mise à jour de la liste apres suppressioon");
      
      handleClose(); // Fermez le modal après la suppression réussie
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  }
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
          <Button variant="danger" onClick={handleDelete}>
            Deletes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteModal;
