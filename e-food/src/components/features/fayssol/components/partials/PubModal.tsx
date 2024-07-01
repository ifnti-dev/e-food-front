import { useState,useEffect, useContext } from "react";
import Modal from "./Modal";
import './modal.css';
import Form from "./Form";
import { useHoverContext } from '../../context/HoverContext';
import { useModalContext } from "../../context/ModalContext";

function PubModal({handleSubmit, handleOnChange}:{handleSubmit:any, handleOnChange:any} ) {
  // const [modal, setModal] = useState<boolean>(false);
  const {modal, setModal} = useModalContext();


  // const [isHovered, setIsHovered] = useState<boolean>(false);
  const { isHovered, setIsHovered } = useHoverContext();


  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



  const toggleModal = () => {
    setModal((prevState) => !prevState);
    if(modal == false){
      handleMouseLeave();
      console.log("isHovered " + isHovered);
      
    }
  }

  // const handleSuccess = () => {
  //   window.alert('Thanks for clicking!'); 
  //   toggleModal(); 
  // }

  useEffect(() => {
    console.log("le modal "+modal);
  }, [modal]);

  return (
    <>
      <button className="btn btn-primary text-center fs-5 mb-4" onClick={toggleModal}>
      <i className="bi bi-plus" aria-hidden="true"  ></i>
        Ajouter</button>
       {/* <div className="app"> */}
      {/* <h2 className="title">ReactJS Modal</h2> */}
      {/* <div> */}
        {/* <button className="modal-btn" onClick={toggleModal}> */}
        {/* <i className="bi bi-pen text-primary fs-5" aria-hidden="true"  onClick={()=>handleEdit(publicite)}></i> */}
        {/* </button> */}
      {/* </div> */}
        
          <Modal isOpen={modal}>
            <div className="modale" style={{zIndex:2000}}>
              <span onClick={toggleModal} className="closeX">X</span>
              <h3>Ajouter une publicité</h3>
                <Form handleSubmit={handleSubmit } handleOnChange={handleOnChange}  />
              
              {/* <button className="modal-btn send" onClick={handleSuccess}>Send</button>
              <button className="modal-btn close" onClick={toggleModal}>Close</button> */}
            </div>
          </Modal>
       
    {/* </div> */}
    </>
   
  );
};

export default PubModal;